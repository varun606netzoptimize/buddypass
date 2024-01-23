/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-dupe-keys */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, {useState, useContext, useEffect} from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';

export default function HomeTripCard({onLike}) {
  const [like, setLike] = useState(false);

  function handleLike() {
    setLike(prevValue => !prevValue);
  }

  return (
    <View style={styles.tripCardContainer}>
      <View
        style={{
          height: 116,
          width: '100%',
          borderTopEndRadius: 10,
          borderTopLeftRadius: 10,
          position: 'relative',
        }}>
        <TouchableOpacity
          style={{
            width: 18,
            height: 18,
            borderWidth: 1,
            borderColor: like ? '#F74545' : 'white',
            position: 'absolute',
            right: 12,
            top: 12,
          }}
          onPress={handleLike}
        />
      </View>
      <Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tripCardContainer: {
    width: '45%',
    height: 190,
    backgroundColor: 'black',
    borderRadius: 10,
  },
});
