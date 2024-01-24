/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import {View, Text, StyleSheet, TextInput, Image} from 'react-native';
import React from 'react';
import CustomView from '../CustomView';
import CustomBackButton from '../CustomBackButton';

var searchIcon = require('../../Images/search.png');

export default function BuddySearch({navigation}) {
  function handleBackButtonClick() {
    navigation.goBack();
    return true;
  }

  return (
    <View style={styles.container}>
      <CustomView>
        <View style={{marginTop: '4%'}}>
          <CustomBackButton onBack={handleBackButtonClick} />
        </View>
        <View style={styles.searchBox}>
          <Image source={searchIcon} style={{width: 20, height: 20}} />
          <TextInput
            style={styles.textInput}
            placeholder="Search"
            placeholderTextColor={'#f2f2f2'}
            autoFocus={true}
          />
        </View>
      </CustomView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3A3A3A',
  },
  searchBox: {
    width: '100%',
    height: 40,
    backgroundColor: '#4E4E4E',
    borderRadius: 100,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 8,
    paddingRight: 8,
    marginTop: 24,
  },
  textInput: {
    width: '94%',
    height: 40,
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
  },
});
