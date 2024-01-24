/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
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
          <CustomBackButton
            onBack={handleBackButtonClick}
            title="Buddy Search"
            btnType="center"
          />
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

        <ScrollView
          style={{borderWidth: 1, marginTop: 24}}
          keyboardShouldPersistTaps="always">
          <TouchableOpacity style={styles.buddies}>
            <View style={styles.dp} />
            <View style={styles.nameUsernameContainer}>
              <Text style={styles.name}>Buddy Name</Text>
              <Text style={styles.username}>@username</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
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
  name: {
    width: '94%',
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
  },
  username: {
    width: '94%',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 12,
    marginTop: 2,
  },
  dp: {
    width: 48,
    height: 48,
    borderWidth: 1,
    borderRadius: 1000,
  },
  buddies: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  nameUsernameContainer: {
    width: '85%',
    paddingLeft: 16,
    paddingRight: 16,
  },
});
