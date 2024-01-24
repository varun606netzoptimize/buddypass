/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import React, {useRef} from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

var buddypassIcon = require('../../Images/buddypass.png');

import Carousel, {Pagination} from 'react-native-snap-carousel';

const SLIDER_WIDTH = Dimensions.get('window').width + 80;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.73);

export default function NewsCard({newsData}) {
  const isCarousel = useRef(null);

  return (
    <>
      <Carousel
        layout="default"
        ref={isCarousel}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={440}
        inactiveSlideShift={0}
        useScrollView={true}
        data={newsData}
        renderItem={({item, index}) => {
          return (
            <View style={{width: ITEM_WIDTH}}>
              <TouchableOpacity style={styles.newsContainer}>
                <View style={styles.newsImgContainer}>
                  {item.image == null ? (
                    <Image
                      source={buddypassIcon}
                      style={{width: 64, height: 60}}
                    />
                  ) : (
                    <Image source={{uri: item.image}} style={styles.imgStyle} />
                  )}
                </View>

                <View style={styles.newsTextContainer}>
                  <Text style={styles.newsText}>
                    {item.title.length > 50
                      ? item.title.slice(0, 50) + '. . .'
                      : item.title}
                  </Text>

                  <Text style={styles.newsDate}>{item.date}</Text>
                </View>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  newsContainer: {
    width: '100%',
    height: 137,
    marginBottom: 6,
    flexDirection: 'row',
    backgroundColor: '#4F4F4F',
    borderRadius: 10,
  },
  newsImgContainer: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    width: '45%',
  },
  newsTextContainer: {
    height: '100%',
    width: '55%',
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
  imgStyle: {width: '100%', height: '100%', borderRadius: 10},
});
