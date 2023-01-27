import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './screens/auth/LoginScreen';
import RegistrationScreen from './screens/auth/RegistrationScreen';
import Home from './screens/main/Home';

const MainStack = createStackNavigator();

export default function useRoute() {
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
      <MainStack.Screen
        options={{ headerShown: false }}
        name="Home"
        component={Home}
      />
    </MainStack.Navigator>
  );
}
