import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./images/bg.jpg')} style={styles.image}>
        <Text style={styles.text}>Own</Text>
        <TextInput style={styles.input} />
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 30,
    color: 'purple',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    // alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#f0f8ff',
    color: '#fff',
  },
});
