/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import React from 'react';
import {View, StyleSheet} from 'react-native';

export default function CustomView({children}) {
  return <View style={styles.customViewStyle}>{children}</View>;
}

const styles = StyleSheet.create({
  customViewStyle: {
    width: '90%',
    height: '100%',
    alignSelf: 'center',
  },
});
