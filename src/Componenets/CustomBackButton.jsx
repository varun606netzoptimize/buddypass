/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

var back = require('../Images/back.png');

export default function CustomBackButton({navigation, onBack}) {
  return (
    <View style={{width: '104%', alignSelf: 'center'}}>
      <TouchableOpacity style={{width: 24, height: 24}} onPress={onBack}>
        <Image source={back} style={{width: 24, height: 24}} />
      </TouchableOpacity>
    </View>
  );
}
