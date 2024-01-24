/* eslint-disable prettier/prettier */

import 'react-native-gesture-handler';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import {Text, View, Image, Alert} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import React, {useState, useEffect, useContext} from 'react';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

import HomeScreen from './Screens/Home/HomeScreen';

var home = require('./Images/bottomTab/home.png');
var homeSelect = require('./Images/bottomTab/homeSelect.png');
var chat = require('./Images/bottomTab/chat.png');
var chatSelect = require('./Images/bottomTab/chatSelect.png');
var trips = require('./Images/bottomTab/trips.png');
var tripsSelect = require('./Images/bottomTab/tripsSelect.png');
var profile = require('./Images/bottomTab/profile.png');
var profileSelect = require('./Images/bottomTab/profileSelect.png');

const MyHomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default function BottomTabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: 'rgba(0, 0, 0, 0.9)',
          position: 'absolute',
          bottom: -0.5,
          borderTopColor: 'transparent',
          borderBottomWidth: 0,
          height: 80,
        },
        tabBarHideOnKeyboard: true,
        tabBarBackground: () => (
          <View style={{flex: 1}}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={['#3CFFD0', '#71AAFF', '#A273F6', '#A600E0', '#FF4EED']}
              style={{height: '100%'}}>
              <View
                style={{
                  width: '100%',
                  height: 78,
                  position: 'absolute',
                  bottom: 0,
                  backgroundColor: 'black',
                }}
              />
            </LinearGradient>
          </View>
        ),
      }}>
      <Tab.Screen
        name="Home"
        component={MyHomeStack}
        d
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={focused ? homeSelect : home}
                style={{height: 40, width: 30}}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="Chat"
        component={MyHomeStack}
        d
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={focused ? chatSelect : chat}
                style={{height: 40, width: 44}}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="MyTripScreens"
        component={MyHomeStack}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={focused ? tripsSelect : trips}
                style={{height: 40, width: 25}}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="MyProfile"
        component={MyHomeStack}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={focused ? profileSelect : profile}
                style={{height: 40, width: 30}}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
