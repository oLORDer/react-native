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
import { useState } from 'react';
import { Feather } from '@expo/vector-icons';

import location from '../../images/icons/location.png';

export default function CreatePostsScreen({ navigation }) {
  const [title, setTitle] = useState('');
  const [locaton, setLocaton] = useState('');

  const keyboardHide = () => {
    Keyboard.dismiss();
  };

  const handleSubmit = () => {
    console.log(title, locaton);
    keyboardHide();
    setTitle('');
    setLocaton('');
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <KeyboardAvoidingView style={styles.KeyboardWrap}>
          <View style={styles.form}>
            <View style={styles.formImgWrap}></View>
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
                source={location}
              />
              <TextInput
                style={{ ...styles.formInput, paddingLeft: 28 }}
                placeholder="Местность..."
                value={locaton}
                onChangeText={(value) => setLocaton(value)}
              />
            </View>
            <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
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
              onPress={() => navigation.navigate('Coments')}
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
