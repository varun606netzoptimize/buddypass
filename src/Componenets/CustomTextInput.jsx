/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import React from 'react';
import {
  StyleSheet,
  TextInput,
} from 'react-native';

export default function CustomTextInput({placeholder, value, ...exraProps}) {
  return (
    <TextInput
      style={styles.inputStyle}
      {...exraProps}
      placeholder={placeholder}
      value={value}
      placeholderTextColor={'#F2F2F2'}
    />
  );
}

const styles = StyleSheet.create({
  inputStyle: {
    height: 60,
    width: '100%',
    borderRadius: 100,
    backgroundColor: '#4E4E4E',
    alignSelf: 'center',
    fontSize: 16,
    color: '#F2F2F2',
    paddingLeft: 20,
    paddingRight: 20,
    fontFamily: 'Montserrat-Regular',
  },
});
