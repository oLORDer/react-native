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
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Header({ navigation, text, home }) {
  if (home) {
    return (
      <View style={styles.wrap}>
        <View></View>
        <Text style={styles.text}>Публикации</Text>
        <Image
          source={require('../images/icons/logout.png')}
          style={styles.logoutIcon}
          width={24}
          height={24}
        ></Image>
      </View>
    );
  }

  return (
    <View style={styles.wrap}>
      <Image
        source={require('../images/icons/arrow-left.png')}
        style={styles.logoutIcon}
        width={24}
        height={24}
      ></Image>
      <Text style={styles.text}>{text}</Text>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,

    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: '#eee',
  },
  text: {
    fontFamily: 'Roboto-Medium',
    fontSize: 17,
    lineHeight: 22,
    textAlign: 'center',
  },
  logoutIcon: {},
});
