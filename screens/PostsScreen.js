import { StyleSheet, Text, View, FlatList, Image } from 'react-native';

import Header from '../components/Header';
import im from '../images/bg.jpg';
import shape from '../images/icons/shape.png';
import location from '../images/icons/location.png';

const arr = [
  {
    img: im,
    descr: 'Лес',
    comments: 11,
    location: 'Ivano-Frankivsk Region, Ukraine',
    comments: 13,
  },
  { img: im, descr: 'Озеро', comments: 33, location: 'kiev', comments: 13 },
  { img: im, descr: 'Озеро', comments: 33, location: 'kiev', comments: 13 },
  { img: im, descr: 'Озеро', comments: 33, location: 'kiev', comments: 13 },
  {
    img: im,
    descr: 'Река',
    comments: 55,
    location: 'chernivtsi',
    comments: 13,
  },
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
        <FlatList
          style={styles.list}
          data={arr}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <View style={styles.itemImgWrap}>
                <Image style={styles.itemImg} source={item.img} />
              </View>
              <Text style={styles.itemDescr}>{item.descr}</Text>
              <View style={styles.itemComAndDescr}>
                <View style={styles.itemComments}>
                  <Image source={shape} />
                  <Text style={styles.itemCommentsText}>{item.comments}</Text>
                </View>
                <View style={styles.itemLocation}>
                  <Image source={location} />
                  <Text style={styles.itemLocationText}>{item.location}</Text>
                </View>
              </View>
            </View>
          )}
        />
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
  itemImgWrap: {
    width: '100%',
    height: 240,
    borderRadius: 8,
    overflow: 'hidden',
  },
  itemImg: { width: '100%', height: '100%' },
  itemDescr: { marginVertical: 8, fontFamily: 'Roboto-Medium', fontsize: 16 },
  itemComAndDescr: { flexDirection: 'row', justifyContent: 'space-between' },
  itemComments: { flexDirection: 'row' },
  itemCommentsText: { marginLeft: 6, color: '#BDBDBD', fontSize: 16 },
  itemLocation: { flexDirection: 'row', alignItems: 'center' },
  itemLocationText: {
    marginLeft: 6,
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    textDecorationLine: 'underline',
  },
});
