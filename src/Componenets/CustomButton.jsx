/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export default function Button({buttonName, children, size, ...extraProps}) {
  if (size == 'medium') {
    return (
      <TouchableOpacity style={styles.mediumButtonStyle} {...extraProps}>
        <Text style={styles.ButtonText}>{buttonName}</Text>
        {children}
      </TouchableOpacity>
    );
  } else if (size == 'large') {
    return (
      <TouchableOpacity style={styles.largeButtonStyle} {...extraProps}>
        <Text style={styles.ButtonText}>{buttonName}</Text>
        {children}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  mediumButtonStyle: {
    backgroundColor: '#F2F2F2',
    height: 60,
    // width: 188,
    width: '60%',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
  },

  largeButtonStyle: {
    backgroundColor: '#F2F2F2',
    height: 60,
    width: '100%',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
  },

  ButtonText: {
    fontSize: 18,
    color: '#4F4F4F',
    fontWeight: '600',
    fontFamily: 'Montserrat-SemiBold',
  },
});
