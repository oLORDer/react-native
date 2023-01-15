import { Image, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HeaderBackButton } from '@react-navigation/elements';

import PostsScreen from './PostsScreen';
import CreatePostsScreen from './CreatePostsScreen';
import ProfileScreen from './ProfileScreen';

//icons
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const Tabs = createBottomTabNavigator();

export default function Home({ navigation }) {
  return (
    <Tabs.Navigator>
      <Tabs.Screen
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, size, color }) => (
            <Feather name="grid" size={24} color={color} />
          ),
        }}
        name={'Posts'}
        component={PostsScreen}
      ></Tabs.Screen>
      <Tabs.Screen
        options={{
          title: 'Создать публикацию',
          headerLeft: () => (
            <HeaderBackButton
              style={{
                paddingHorizontal: 20,
              }}
              backImage={() => <AntDesign name="arrowleft" size={24} />}
              onPress={() => navigation.navigate('Home', { screen: 'Posts' })}
            />
          ),
          tabBarShowLabel: false,
          tabBarVisible: true,
          tabBarStyle: { display: 'none' },
          tabBarIcon: ({ focused, size, color }) => (
            <View>
              <Image
                style={{
                  width: 70,
                  height: 40,
                  position: 'absolute',
                  left: -23,
                  top: -6,
                }}
                source={require('../../images/icons/rectangle.png')}
              />
              <AntDesign
                name="plus"
                size={24}
                color={focused ? color : '#fff'}
              />
            </View>
          ),
        }}
        name={'CreatePosts'}
        component={CreatePostsScreen}
      ></Tabs.Screen>
      <Tabs.Screen
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, size, color }) => (
            <Feather name="user" size={24} color={color} />
          ),
        }}
        name={'Profile'}
        component={ProfileScreen}
      ></Tabs.Screen>
    </Tabs.Navigator>
  );
}
