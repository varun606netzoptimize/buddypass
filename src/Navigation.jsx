/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, {useState, useContext, useEffect} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import OnBoarding from './Screens/OnBoarding/OnBoarding';
import SignIn from './Screens/SignIn/SignIn';

import HomeScreen from './Screens/Home/HomeScreen';

import BottomTabNavigation from './BottomTabNavigation';

import {AuthContext} from './Context/AuthContext';

export default function Navigation() {
  const {authToken} = useContext(AuthContext);

  let navigationStack = (
    <>
      <Stack.Screen name="Onboarding" component={OnBoarding} />
      <Stack.Screen name="SignIn" component={SignIn} />
    </>
  );

  if (authToken) {
    navigationStack = (
      <>
        <Stack.Screen
          name="BottomTabNavigation"
          component={BottomTabNavigation}
        />
      </>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {navigationStack}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
