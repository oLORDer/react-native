import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useDispatch } from 'react-redux';

import { logOut } from '../../redux/auth/auth-operations';

import DefaultPostsScreen from '../other/DefaultPostsScreen';
import MapScreen from '../other/MapScreen';
import CommentsScreen from '../other/CommentsScreen';

const PostStack = createNativeStackNavigator();

export default function PostsScreen({ navigation }) {
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logOut());
    navigation.navigate('Login');
  };

  return (
    <PostStack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
      <PostStack.Screen
        name="DefaultPosts"
        component={DefaultPostsScreen}
        options={{
          title: 'Публикации',
          headerRight: () => (
            <TouchableOpacity
              style={{ width: 24, height: 24 }}
              onPress={onLogout}
            >
              <Image
                source={require('../../images/icons/logout.png')}
                width={24}
                height={24}
              ></Image>
            </TouchableOpacity>
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
