import { StyleSheet, Text, View, FlatList, Image } from 'react-native';

import Header from '../components/Header';
import im from '../images/bg.jpg';
const arr = [
  { img: im, descr: 'Les', comments: 11, location: 'chernivtsi' },
  { img: im, descr: 'Lake', comments: 33, location: 'kiev' },
  { img: im, descr: 'Les', comments: 55, location: 'sumy' },
];

export default function PostsScreen({ navigation }) {
  return (
    <View style={styles.wrap}>
      <Header home={true} />
      <View style={styles.main}>
        <View style={styles.user}>
          <View style={styles.userBlock}>
            <Image
              source={require('../images/bg.jpg')}
              style={styles.userImg}
              resizeMode="cover"
            ></Image>
          </View>
          <View>
            <Text style={styles.userName}>Natali Romanova</Text>
            <Text style={styles.userEmail}>email@example.com</Text>
          </View>
        </View>
        <View stype={styles.list}>
          {arr?.map(({ img, descr, comments, location }) => (
            <View style={styles.item}>
              <View style={styles.itemImgWrap}>
                <Image style={styles.itemImg} source={img} />
              </View>
              <Text style={styles.itemDescr}>{descr}</Text>
              <View></View>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { flex: 1, paddingTop: 55, backgroundColor: '#fff' },
  main: { paddingHorizontal: 16 },
  user: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 32,
  },
  userBlock: {
    width: 60,
    height: 60,
    marginRight: 8,
    borderRadius: 16,
    backgroundColor: '#F6F6F6',
  },
  userImg: {
    width: '100%',
    height: '100%',
    borderRadius: 16,
  },
  userName: {
    fontFamily: 'Roboto-Bold',
    fontSize: 13,
  },
  userEmail: {
    fontFamily: 'Roboto-Medium',
    fontSize: 11,
    color: '#212121',
    opacity: 0.8,
  },
  list: {},
  item: {
    marginBottom: 32,
  },
  itemImgWrap: { width: 343, height: 240, borderRadius: 8, overflow: 'hidden' },
  itemImg: { width: '100%', height: '100%' },
  itemDescr: { marginVertical: 8, fontFamily: 'Roboto-Medium', fontsize: 16 },
});
