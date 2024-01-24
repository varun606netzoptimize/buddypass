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
  ActivityIndicator,
  ScrollView,
} from 'react-native';

import CustomView from '../../Componenets/CustomView';
import HomeTripCard from '../../Componenets/HomeScreenComponent/HomeTripCard';
import {AuthContext} from '../../Context/AuthContext';
import SearchBarButton from '../../Componenets/SearchBarButton';
import {ExploreCategoriesOptions} from './ExploreCategores';
import NewsCard from '../../Componenets/HomeScreenComponent/NewsCard';

export default function HomeScreen() {
  const {discoverTrips, newsData} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <CustomView>
        <View style={{marginTop: '4%'}}>
          <SearchBarButton />
        </View>

        <ScrollView style={{marginTop: 20}}>
          <Text style={styles.exploreCategories}>Explore Categories</Text>

          <View style={styles.ServcesBox}>
            {ExploreCategoriesOptions.map((data, i) => {
              return (
                <TouchableOpacity style={styles.services} key={i}>
                  <Image source={data.icon} style={styles.servicesIcon} />
                  <Text style={styles.servicesText}>{data.name}</Text>
                </TouchableOpacity>
              );
            })}
          </View>

          <NewsCard newsData={newsData} />

          <View style={styles.homeTripCardContainer}>
            {discoverTrips?.map((trip, i) => (
              <HomeTripCard
                key={i}
                tripId={trip._id}
                tripImg={trip.trip_image}
                tripName={trip.trip_name}
                tripLocation={trip.destination[0]}
              />
            ))}
          </View>

          <View style={{height: 104}} />
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
  homeTripCardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  exploreCategories: {
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
    color: '#f2f2f2',
  },
  ServcesBox: {
    alignItems: 'flex-start',
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  services: {
    width: '20%',
    height: 65,
    backgroundColor: '#4E4E4E',
    borderRadius: 10,
    justifyContent: 'space-evenly',
    marginTop: 16,
  },
  servicesIcon: {
    width: 20,
    height: 20,
    alignSelf: 'center',
  },
  servicesText: {
    fontFamily: 'Montserrat-SemiBold',
    color: '#F2F2F2',
    fontSize: 10,
    alignSelf: 'center',
  },
});
