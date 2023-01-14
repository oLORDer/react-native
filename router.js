import React from 'react';
import { Image, Svg, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SvgUri } from 'react-native-svg';

import LoginScreen from './screens/auth/LoginScreen';
import RegistrationScreen from './screens/auth/RegistrationScreen';
import PostsScreen from './screens/PostsScreen';
import CreatePostsScreen from './screens/CreatePostsScreen';
import ProfileScreen from './screens/ProfileScreen';

//icons
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

// указывает на группу навигаторов
const MainStack = createStackNavigator();
const Tabs = createBottomTabNavigator();

export default function useRoute(isAuth) {
  if (!isAuth) {
    return (
      <MainStack.Navigator initialRouteName="Login">
        <MainStack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <MainStack.Screen
          options={{ headerShown: false }}
          name="Registration"
          component={RegistrationScreen}
        />
        {/* <MainStack.Screen
            options={{ headerShown: false }} name="Home" component={Home} /> */}
      </MainStack.Navigator>
    );
  }

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
          headerShown: false,
          tabBarShowLabel: false,
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
                source={require('./images/icons/rectangle.png')}
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
