/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, Image, TouchableOpacity} from 'react-native';

var searchIcon = require('../Images/search.png');

export default function SearchBarButton({...allProps}) {
  return (
    <TouchableOpacity style={styles.searchBarContainer} {...allProps}>
      <Image source={searchIcon} style={{width: 20, height: 20}} />
      <Text style={styles.searchText}>Search</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  searchBarContainer: {
    width: '100%',
    height: 40,
    backgroundColor: '#4E4E4E',
    borderRadius: 100,
    paddingLeft: 16,
    paddingRight: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    color: '#F2F2F2',
    marginLeft: 8,
  },
});
