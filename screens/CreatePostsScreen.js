import { StyleSheet, Text, View } from 'react-native';

import Header from '../components/Header';

export default function CreatePostsScreen({ navigation }) {
  return (
    <View style={styles.wrap}>
      <Header />
      <Text style={styles.content}>CreatePostsScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { flex: 1, paddingTop: 55 },
  content: { paddingHorizontal: 16 },
});
