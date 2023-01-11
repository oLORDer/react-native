import { useState, useCallback } from 'react';
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
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

export default function LoginScreen() {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
  });

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const handleSubmit = () => {
    console.log(login, email, password);
    keyboardHide();
    setEmail('');
    setPassword('');
  };

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <TouchableWithoutFeedback
      onPress={keyboardHide}
      onLayout={onLayoutRootView}
    >
      <View style={styles.container}>
        <ImageBackground
          source={require('./images/bg.jpg')}
          style={styles.image}
        >
          <KeyboardAvoidingView
            style={styles.KeyboardWrap}
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
          >
            <View
              style={{ ...styles.form, height: isShowKeyboard ? 250 : 490 }}
            >
              <View style={styles.header}>
                <Text style={styles.title}>Войти</Text>
              </View>
              <View>
                <TextInput
                  style={styles.formInput}
                  placeholder="Адрес электронной почты"
                  secureTextEntry="false"
                  onFocus={() => setIsShowKeyboard(true)}
                  value={email}
                  onChangeText={(value) => setEmail(value)}
                />
              </View>
              <View>
                <TextInput
                  style={styles.formInput}
                  placeholder="Пароль"
                  secureTextEntry
                  onFocus={() => setIsShowKeyboard(true)}
                  value={password}
                  onChangeText={(value) => setPassword(value)}
                />
              </View>
              <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
                <Text style={styles.btnText}>Войти</Text>
              </TouchableOpacity>
              <View>
                <Text style={styles.ask}>Нет аккаунта? Зарегистрироваться</Text>
              </View>
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
  ask: {
    textAlign: 'center',
  },
});
