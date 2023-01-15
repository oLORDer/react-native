import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DefaultPostsScreen from '../other/DefaultPostsScreen';
import MapScreen from '../other/MapScreen';
import CommentsScreen from '../other/CommentsScreen';

// import LogOut from '../../components/svg/LogOut';

const PostStack = createNativeStackNavigator();

export default function PostsScreen() {
  return (
    <PostStack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
      <PostStack.Screen
        name="DefaultPosts"
        component={DefaultPostsScreen}
        options={{
          title: 'Публикации',
          headerRight: () => (
            <Image
              source={require('../../images/icons/logout.png')}
              width={24}
              height={24}
            ></Image>
          ),
        }}
      />
      <PostStack.Screen
        name="Map"
        component={MapScreen}
        options={{
          title: 'Карта',
        }}
      />
      <PostStack.Screen
        name="Comments"
        component={CommentsScreen}
        options={{
          title: 'Комментарии',
        }}
      />
    </PostStack.Navigator>
  );
}
