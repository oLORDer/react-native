import { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import * as ImagePicker from 'expo-image-picker';

import { register, getCurrentUser } from '../../redux/auth/auth-operations';

export default function RegistrationScreen({ navigation }) {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [avatar, setAvatar] = useState(null);

  const userId = useSelector((store) => {
    return store.auth.userId;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (userId === null) {
      dispatch(getCurrentUser());
    }
    navigation.navigate(userId ? 'Home' : 'Registration');
  }, [userId]);

  const getAvatar = async () => {
    let file = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.3,
    });
    if (!file.canceled) {
      setAvatar(file.assets[0].uri);
    }
    console.log(file.assets[0].uri);
  };

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const handleSubmit = () => {
    dispatch(register({ login, email, password, avatar }));
    keyboardHide();
    setLogin('');
    setEmail('');
    setPassword('');
    setAvatar(null);
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground
          source={require('../../images/bg.jpg')}
          style={styles.image}
        >
          <KeyboardAvoidingView
            style={styles.KeyboardWrap}
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
          >
            <View
              style={{ ...styles.form, height: isShowKeyboard ? 375 : 549 }}
            >
              <View style={styles.avatarWpar}>
                <View style={styles.avatarBlock}>
                  <Image
                    source={{ uri: avatar }}
                    style={styles.avatarImg}
                    resizeMode="cover"
                  ></Image>
                  <TouchableOpacity
                    onPress={getAvatar}
                    style={styles.avatarAdd}
                  ></TouchableOpacity>
                </View>
              </View>
              <View style={styles.header}>
                <Text style={styles.title}>??????????????????????</Text>
              </View>
              <View>
                <TextInput
                  style={styles.formInput}
                  placeholder="??????????"
                  onFocus={() => setIsShowKeyboard(true)}
                  value={login}
                  onChangeText={(value) => setLogin(value)}
                />
              </View>
              <View>
                <TextInput
                  style={styles.formInput}
                  placeholder="?????????? ?????????????????????? ??????????"
                  secureTextEntry="false"
                  onFocus={() => setIsShowKeyboard(true)}
                  value={email}
                  onChangeText={(value) => setEmail(value)}
                />
              </View>
              <View>
                <TextInput
                  style={styles.formInput}
                  placeholder="????????????"
                  secureTextEntry
                  onFocus={() => setIsShowKeyboard(true)}
                  value={password}
                  onChangeText={(value) => setPassword(value)}
                />
              </View>
              <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
                <Text style={styles.btnText}>????????????????????????????????????</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.ask}>?????? ???????? ??????????????? ??????????</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  KeyboardWrap: { width: '100%' },
  form: {
    width: '100%',
    paddingHorizontal: 16,
    paddingTop: 60,
    backgroundColor: '#FFFFFF',
    borderRadius: '25 25 0 0',
  },
  header: {
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Roboto-Medium',
    fontSize: 30,
    marginVertical: 33,
    marginHorizontal: 'auto',
  },
  formInput: {
    fontFamily: 'Roboto-Regular',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#f0f8ff',
    color: '#BDBDBD',
    backgroundColor: '#F6F6F6',
    fontSize: 16,
    padding: 16,
    marginBottom: 16,
    ...Platform.select({
      android: {
        color: '#BDBDBD',
      },
    }),
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
  avatarWpar: {
    position: 'absolute',
    top: -60,
    alignItems: 'center',
    alignSelf: 'center',
    width: '100%',
  },
  avatarBlock: {
    position: 'relative',
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: '#F6F6F6',
  },
  avatarAdd: {
    position: 'absolute',
    top: 81,
    left: 107,

    width: 25,
    height: 25,
    backgroundColor: '#fff',
    borderRadius: 100,
  },
  avatarImg: {
    width: '100%',
    height: '100%',
    borderRadius: 16,
  },
  ask: {
    fontfamily: 'Roboto',
    fontSize: 16,
    lineHeight: 19,
    textAlign: 'center',
    color: '#1B4371',
  },
});
