import { StyleSheet, Text, View } from 'react-native';

import Header from '../components/Header';

export default function ProfileScreen({ navigation }) {
  return (
    <View style={styles.wrap}>
      <Header />
      <Text style={styles.content}>ProfileScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { flex: 1, paddingTop: 55 },
  content: { paddingHorizontal: 16 },
});
