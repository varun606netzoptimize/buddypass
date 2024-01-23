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

import CustomView from '../../Componenets/CustomView';
import HomeTripCard from '../../Componenets/HomeScreenComponent/HomeTripCard';

export default function HomeScreem() {
  const [like, setLike] = useState(false);

  function handleLike() {
    setLike(prevValue => !prevValue);
  }

  return (
    <View style={styles.container}>
      <CustomView>
        <Text>Home</Text>

        <HomeTripCard onLike={handleLike} like={like} />
      </CustomView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3A3A3A',
  },
});
