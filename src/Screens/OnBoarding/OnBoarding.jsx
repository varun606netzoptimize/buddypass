/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-dupe-keys */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  Alert,
} from 'react-native';
import CustomView from '../../Componenets/CustomView';
import CustomButton from '../../Componenets/CustomButton';
import {useEffect} from 'react';

var BgImage = require('../../Images/background.png');
var onboardingImg1 = require('../../Images/onboardingImages/onboardingImg1.png');
var RightArrow = require('../../Images/arrowRight.png');

export default function OnBoarding({navigation}) {
  function getStartedHandler() {
    navigation.navigate('SignIn');
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={BgImage} style={styles.container}>
        <CustomView>
          <Image source={onboardingImg1} style={styles.onBoardingImgStyle} />
          <Text style={styles.tagline}>Your Trip. Your Friends. Your Way.</Text>
          <Text style={styles.subTagline}>Group travel made simple!</Text>

          <View style={{alignSelf: 'center', marginTop: 26}}>
            <CustomButton
              buttonName={'Get Started'}
              onPress={getStartedHandler}
              size="medium">
              <Image source={RightArrow} style={{width: 40, height: 40}} />
            </CustomButton>
          </View>
        </CustomView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  onBoardingImgStyle: {
    width: 331,
    height: 420,
    borderRadius: 20,
    borderWidth: 1,
    alignSelf: 'center',
    marginTop: '8%',
  },
  tagline: {
    fontSize: 26,
    color: '#F2F2F2',
    fontWeight: '600',
    alignSelf: 'center',
    textAlign: 'center',
    width: 200,
    lineHeight: 40,
    marginTop: 28,
    fontFamily: 'Montserrat-SemiBold',
  },
  subTagline: {
    fontSize: 16,
    color: '#F2F2F2',
    fontWeight: '400',
    alignSelf: 'center',
    lineHeight: 24,
    marginTop: 28,
    fontFamily: 'Montserrat-Regular',
  },
});
