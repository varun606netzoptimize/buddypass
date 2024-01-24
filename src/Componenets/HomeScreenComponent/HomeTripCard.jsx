/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import React, {useState, useContext, useEffect} from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

var heart = require('../../Images/heart.png');
var redHeart = require('../../Images/redHeart.png');
var placeholderIMG = require('../../Images/placeholderIMG.png');
var location = require('../../Images/location.png');

import {Buddypass_Base_URL} from '@env';
import axios from 'axios';

import {AuthContext} from '../../Context/AuthContext';

export default function HomeTripCard({
  tripImg = placeholderIMG,
  tripName,
  tripLocation,
  tripId,
}) {
  const {myUserDetails, authToken} = useContext(AuthContext);

  const likedTripIdToCheck = tripId;

  const isLiked = myUserDetails?.likedTrips?.some(
    likedTrip => likedTrip.trip_id._id === likedTripIdToCheck,
  );

  const [like, setLike] = useState(isLiked);

  useEffect(() => {
    setLike(isLiked);
  }, [isLiked]);

  function AddLike(toLikeTripId) {
    const AddCommentURL = `${Buddypass_Base_URL}/v1/app/trip_likes/create/`;

    const formData = new FormData();
    formData.append('trip_id', toLikeTripId);
    formData.append('user_id', myUserDetails.user._id);
    formData.append('username', myUserDetails.user.username);

    axios
      .post(AddCommentURL, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: 'Bearer ' + authToken,
        },
      })
      .then(res => {
        setLike(prevValue => !prevValue);
      })
      .catch(err => {
        console.log('failed to like trip', err.response.data);
      });
  }

  return (
    <View style={styles.tripCardContainer}>
      <View style={styles.imageContainer}>
        <ImageBackground
          source={tripImg == null ? placeholderIMG : {uri: tripImg}}
          style={styles.bgImg}>
          <TouchableOpacity
            style={styles.heart}
            onPress={() => AddLike(tripId)}>
            <Image
              source={like ? redHeart : heart}
              style={{height: 20, width: 20}}
            />
          </TouchableOpacity>
        </ImageBackground>
      </View>
      <View
        style={{
          padding: 10,
        }}>
        <Text style={styles.tripTitle}>{tripName}</Text>
        <View style={styles.locationContainer}>
          <Image source={location} style={{width: 12, height: 12}} />
          <Text style={styles.tripLocation}>{tripLocation}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tripCardContainer: {
    width: '45%',
    minHeight: 190,
    backgroundColor: '#4E4E4E',
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
    elevation: 5,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  imageContainer: {
    borderTopEndRadius: 10,
    borderTopLeftRadius: 10,
    overflow: 'hidden',
  },
  bgImg: {
    height: 116,
    width: '100%',
    borderTopEndRadius: 10,
    borderTopLeftRadius: 10,
    position: 'relative',
  },
  heart: {
    position: 'absolute',
    right: 4,
    top: 8,
    width: 24,
    height: 24,
  },
  tripTitle: {
    fontSize: 14,
    color: '#F2F2F2',
    fontFamily: 'Montserrat-SemiBold',
    lineHeight: 20,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  tripLocation: {
    fontSize: 10,
    color: '#F2F2F2',
    fontFamily: 'Montserrat-Regular',
    lineHeight: 12,
    marginLeft: 4,
  },
});
