import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getAuthStore } from '../../redux/auth/auth-selectors';
import { Feather } from '@expo/vector-icons';
import { Camera } from 'expo-camera';
import * as Location from 'expo-location';

import { sendPostToServer } from '../../redux/dashboard/dashboard-operations';

import locationImg from '../../images/icons/location.png';

export default function CreatePostsScreen({ navigation }) {
  const { userId, login } = useSelector(getAuthStore);
  const [title, setTitle] = useState('');
  const [locationName, setLocationName] = useState('');
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState('');
  const [location, setLocation] = useState(null);
  const [isDisableBtn, setIsDisableBtn] = useState(true);
  const [hasCamPermission, setHasCamPermission] = useState(false);
  const [hasLocationPermission, setHasLocationPermission] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasCamPermission(status === 'granted');

      const locationStatus = await Location.requestForegroundPermissionsAsync();
      if (locationStatus.status) {
        setHasLocationPermission(locationStatus.status === 'granted');
      }
    })();
  }, []);

  useEffect(() => {
    const isPostDataReady = title !== '' && locationName !== '' && photo !== '';
    setIsDisableBtn(!isPostDataReady);
  }, [title, locationName, photo]);

  const keyboardHide = () => {
    Keyboard.dismiss();
  };

  const clearForm = () => {
    setTitle('');
    setLocationName('');
    setPhoto('');
  };

  const handleSubmit = async () => {
    sendPostToServer({ photo, title, location, userId, login });

    keyboardHide();
    clearForm();

    const locationData = await Location.getCurrentPositionAsync({});
    setLocation(locationData);
    console.log('location>>>>>', photo);

    navigation.navigate('DefaultPosts');
  };

  const takePhoto = async () => {
    const { uri } = await camera.takePictureAsync({ skipProcessing: false });
    setPhoto(uri);
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <KeyboardAvoidingView style={styles.KeyboardWrap}>
          <View style={styles.form}>
            <View style={styles.formImgWrap}>
              {photo === '' ? (
                <Camera style={styles.camera} ref={setCamera}>
                  <TouchableOpacity style={styles.snapWrap} onPress={takePhoto}>
                    <View style={styles.snap}></View>
                  </TouchableOpacity>
                </Camera>
              ) : (
                <View
                  style={{
                    height: '100%',
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Image
                    source={{ uri: photo }}
                    style={{ height: '100%', width: '100%' }}
                  />
                  <TouchableOpacity
                    style={{
                      ...styles.snapWrap,
                      position: 'absolute',
                      backgroundColor: 'red',
                    }}
                    onPress={() => setPhoto('')}
                  >
                    <View style={styles.snap}></View>
                  </TouchableOpacity>
                </View>
              )}
            </View>
            <Text style={styles.formImgText}>Загрузите фото</Text>
            <View>
              <TextInput
                style={styles.formInput}
                placeholder="Название"
                value={title}
                onChangeText={(value) => setTitle(value)}
              />
            </View>
            <View>
              <Image
                style={{ position: 'absolute', top: 14 }}
                source={locationImg}
              />
              <TextInput
                style={{ ...styles.formInput, paddingLeft: 28 }}
                placeholder="Местность..."
                value={locationName}
                onChangeText={(value) => setLocationName(value)}
              />
            </View>
            <TouchableOpacity
              style={styles.btn}
              onPress={handleSubmit}
              disabled={isDisableBtn}
            >
              <Text style={styles.btnText}>Опубликовать</Text>
            </TouchableOpacity>
          </View>

          {/* bottom trash */}
          <View
            style={{
              height: 84,
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}
          >
            <TouchableOpacity
              style={{
                width: 70,
                height: 40,
                backgroundColor: '#FF6C00',
                borderRadius: 20,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={clearForm}
            >
              <Feather name="trash-2" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  KeyboardWrap: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
  },
  form: {
    width: '100%',
    paddingHorizontal: 16,
    paddingTop: 30,
  },
  formImgWrap: {
    width: '100%',
    height: 240,
    backgroundColor: '#F6F6F6',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 8,
    marginBottom: 8,
  },
  camera: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  snapWrap: {
    borderRadius: 100,
    backgroundColor: '#fff',
    width: 60,
    height: 60,
  },
  snap: {},
  formImgText: {
    fontSize: 16,
    color: '#BDBDBD',
    marginBottom: 32,
    fontFamily: 'Roboto-Regular',
  },
  formInput: {
    fontFamily: 'Roboto-Regular',
    borderBottomWidth: 1,
    borderRadius: 8,
    borderColor: '#E8E8E8',
    color: '#BDBDBD',
    fontSize: 16,
    paddingVertical: 16,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF6C00',
    borderRadius: 100,
    height: 51,
    marginTop: 42,
    marginBottom: 16,
  },
  btnText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: '#fff',
  },
});
