import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ImageBackground,
} from 'react-native';

import im from '../../images/bg.jpg';
import shape from '../../images/icons/shapeOrange.png';
import location from '../../images/icons/location.png';
import like from '../../images/icons/like.png';

const arr = [
  {
    id: 11,
    img: im,
    descr: 'Лес',
    comments: 11,
    location: 'Ivano-Frankivsk Region, Ukraine',
    name: 'pari',
    place: 'pari',
    coords: { latitude: '48.92297644095258', longitude: '24.71031848277903' },
  },
  {
    id: 12,
    img: im,
    descr: 'Озеро',
    comments: 33,
    location: '衡阳市,Китай, Хунань',
    name: 'Китай',
    place: 'Китай',
    coords: { latitude: '26.899104665321406', longitude: '112.57420931307371' },
  },
  {
    id: 13,
    img: im,
    descr: 'Озеро',
    comments: 33,
    location: 'kiev',
    name: 'pari',
    place: 'pari',
    coords: { latitude: '48.856614', longitude: '2.3522219' },
  },
  {
    id: 14,
    img: im,
    descr: 'Озеро',
    comments: 33,
    location: 'kiev',
    name: 'pari',
    place: 'pari',
    coords: { latitude: '48.856614', longitude: '2.3522219' },
  },
  {
    id: 15,
    img: im,
    descr: 'Река',
    comments: 55,
    location: 'chernivtsi',
    coords: { latitude: '48.856614', longitude: '2.3522219' },
  },
];

export default function ProfileScreen({ navigation }) {
  return (
    <View style={styles.wrap}>
      <ImageBackground
        source={require('../../images/bg.jpg')}
        style={styles.image}
      >
        <View style={styles.main}>
          <View style={styles.user}>
            <View style={styles.avatarWpar}>
              <View style={styles.avatarBlock}>
                <Image
                  source={require('../../images/bg.jpg')}
                  style={styles.avatarImg}
                  resizeMode="cover"
                ></Image>
                <View style={styles.avatarAdd}></View>
              </View>
            </View>
            <Image
              source={require('../../images/icons/logout.png')}
              width={24}
              height={24}
              style={styles.logout}
            />
            <Text style={styles.userName}>Natali Romanova</Text>
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
                    <Text
                      style={styles.itemCommentsText}
                      onPress={() => navigation.navigate('Comments')}
                    >
                      {item.comments}
                    </Text>
                    <Image source={like} />
                    <Text style={styles.itemCommentsText}>{item.likes}</Text>
                  </View>
                  <View style={styles.itemLocation}>
                    <Image source={location} />
                    <Text
                      style={styles.itemLocationText}
                      onPress={() =>
                        navigation.navigate('Map', {
                          coords: {
                            latitude: item.coords.latitude,
                            longitude: item.coords.longitude,
                          },
                          title: item.name,
                          description: item.place,
                        })
                      }
                    >
                      {item.location}
                    </Text>
                  </View>
                </View>
              </View>
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { flex: 1, backgroundColor: '#fff' },
  main: {
    paddingHorizontal: 16,
    marginTop: 147,
    backgroundColor: '#fff',
    borderRadius: '25px 25px 0 0',
  },
  user: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    paddingTop: 24,
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
  logout: { position: 'absolute', top: 24, right: 0 },
  userName: {
    fontFamily: 'Roboto-Medium',
    width: '100%',
    fontSize: 30,
    marginBottom: 33,
    textAlign: 'center',
    marginTop: 72,
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
  itemCommentsText: {
    marginLeft: 6,
    color: '#BDBDBD',
    fontSize: 16,
    marginRight: 24,
  },
  itemLocation: { flexDirection: 'row', alignItems: 'center' },
  itemLocationText: {
    marginLeft: 6,
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    textDecorationLine: 'underline',
  },
});
