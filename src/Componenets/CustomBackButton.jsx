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

export default function CustomBackButton({onBack, title, btnType = 'left'}) {
  if (btnType == 'left') {
    return (
      <View style={styles.leftBack}>
        <TouchableOpacity style={{width: 24, height: 24}} onPress={onBack}>
          <Image source={back} style={{width: 24, height: 24}} />
        </TouchableOpacity>

        <Text style={styles.text}>{title}</Text>
      </View>
    );
  } else if (btnType == 'center') {
    return (
      <View style={styles.leftBack}>
        <TouchableOpacity style={{width: 24, height: 24}} onPress={onBack}>
          <Image source={back} style={{width: 24, height: 24}} />
        </TouchableOpacity>

        <View style={{width: '90%'}}>
          <Text style={styles.text}>{title}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  leftBack: {
    width: '104%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    color: '#f2f2f2',
  },
});
