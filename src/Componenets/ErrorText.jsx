/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text} from 'react-native';

export default function ErrorText({children}) {
  return <Text style={styles.error}>{children}</Text>;
}

const styles = StyleSheet.create({
  error: {
    color: '#EA4831',
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
  },
});
