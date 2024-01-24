/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import React from 'react';

import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';

var buddypassIcon = require('../../Images/buddypass.png');

export default function NewsCard({newsData}) {
  console.log('newsData:', newsData?.length);

  return (
    <TouchableOpacity style={styles.newsContainer}>
      <View style={styles.newsImgContainer}>
        <Image source={buddypassIcon} style={{width: 64, height: 60}} />
      </View>

      <View style={styles.newsTextContainer}>
        <Text style={styles.newsText}>
          New Covid Restrictions among the U.S.
        </Text>

        <Text style={styles.newsDate}>Apr. 6, 2022</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  newsContainer: {
    width: '100%',
    height: 137,
    marginTop: 16,
    marginBottom: 6,
    flexDirection: 'row',
    backgroundColor: '#4F4F4F',
    borderRadius: 10,
  },
  newsImgContainer: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    width: '40%',
  },
  newsTextContainer: {
    height: '100%',
    width: '60%',
    padding: 12,
    justifyContent: 'space-between',
  },
  newsText: {
    fontFamily: 'Montserrat-SemiBold',
    color: '#f2f2f2',
    fontSize: 14,
    lineHeight: 20,
  },
  newsDate: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    color: '#f2f2f2',
  },
});
