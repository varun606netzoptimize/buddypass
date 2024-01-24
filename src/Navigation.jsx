/* eslint-disable prettier/prettier */

import React, {useContext} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import OnBoarding from './Screens/OnBoarding/OnBoarding';
import SignIn from './Screens/SignIn/SignIn';

import BottomTabNavigation from './BottomTabNavigation';
import BuddySearch from './Componenets/HomeScreenComponent/BuddySearch';

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
        <Stack.Screen name="BuddySearch" component={BuddySearch} />
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
