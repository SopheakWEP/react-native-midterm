/* eslint-disable react/jsx-no-undef */
import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import ScreenA from './ScreenA';
import ScreenB from './ScreenB';
const Stack = createStackNavigator();

function StackNav() {
  return (
    <Stack.Navigator headerMode='none'>
      <Stack.Screen name="Register Form" component={ScreenA} />
      <Stack.Screen name="Success" component={ScreenB} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StackNav />
    </NavigationContainer>
  );
}
