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
import CustomButton from '../../Componenets/CustomButton';
import CustomTextInput from '../../Componenets/CustomTextInput';
import PasswordTextInput from '../../Componenets/PasswordTextInput';

var BgImage = require('../../Images/background.png');

import {Buddypass_Base_URL} from '@env';
import axios from 'axios';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {AuthContext} from '../../Context/AuthContext';

import * as yup from 'yup';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import ErrorText from '../../Componenets/ErrorText';

const schema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
});

export default function SignIn({navigation}) {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const {setAuthToken} = useContext(AuthContext);

  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [viewPassword, setViewPassword] = useState(true);
  const [loading, setIsLoading] = useState(false);

  function togglePasswordhandler() {
    setViewPassword(prevValue => !prevValue);
  }

  const Login = formData => {
    setIsLoading(true);
    const LoginURL = `${Buddypass_Base_URL}/v1/app/auth/login`;

    var userData = {
      username: formData.username,
      password: formData.password,
    };

    axios
      .post(LoginURL, userData, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(async res => {
        setIsLoading(false);

        if (res.data.data.user.profile_verified === false) {
          navigation.navigate('OTPverification', {
            emailID: res.data.data.user.email,
          });
        } else if (res.data.data.user.is_profile_completed === false) {
          Toast.show({
            type: 'info',
            text1: 'Incomplete Profile',
            text2: 'Your profile is incomplete',
          });

          navigation.navigate('CompleteProfile', {
            emailID: res.data.data.user.email,
            myToken: res.data.data.token,
          });
        } else if (res.data.data.user.is_deleted === true) {
          Toast.show({
            type: 'info',
            text1: 'Account Deletion',
            text2: 'Your account is under deletion',
          });
        } else if (res.data.data.user.status === 'inactive') {
          Toast.show({
            type: 'error',
            text1: 'Account Suspended',
            text2: 'Please contact the Buddypass team to resolve.',
          });
        } else if (res.data.data.user.is_locked === true) {
          Toast.show({
            type: 'error',
            text1: 'Account Locked',
            text2: 'Please enter OTP to unlock your account',
          });

          UnlockAccount(res.data.data.user.email);
        } else {
          setAuthToken(res.data.data.token);
          await AsyncStorage.setItem('authToken', res.data.data.token);
          Toast.show({
            type: 'success',
            text1: 'Hello',
            text2: `Welcome to Buddypass @${res.data.data.user.username} 👋`,
          });
        }
      })
      .catch(err => {
        setIsLoading(false);
        if (err.response.data.status == 400) {
          Toast.show({
            type: 'error',
            text1: 'Sign-In failed',
            text2: err.response.data.message,
          });
        }
      });
  };

  function UnlockAccount(email) {
    console.log('unlock account');
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={BgImage} style={styles.container}>
        <CustomView>
          <Text style={styles.tagline}>Hello Again!</Text>
          <Text style={styles.subTagline}>
            Welcome back you’ve been missed!
          </Text>

          <View style={{marginTop: 42}}>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({field: {onChange, value}}) => (
                <CustomTextInput
                  value={value}
                  onChangeText={onChange}
                  placeholder="username"
                />
              )}
              name="username"
            />
            {errors.username && (
              <ErrorText>{errors.username.message}</ErrorText>
            )}
          </View>

          <View style={{marginTop: 16}}>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({field: {onChange, value}}) => (
                <PasswordTextInput
                  placeholder={'password'}
                  value={value}
                  onChangeText={onChange}
                  showPassword={viewPassword}
                  togglePasswordVisiblity={togglePasswordhandler}
                />
              )}
              name="password"
            />
            {errors.password && (
              <ErrorText>{errors.password.message}</ErrorText>
            )}
          </View>

          <View style={styles.helpLinkContainer}>
            <TouchableOpacity style={{marginRight: 8}}>
              <Text style={styles.signUpHelpLink}>Forget Username?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{marginLeft: 8}}>
              <Text style={styles.signUpHelpLink}>Forget Password?</Text>
            </TouchableOpacity>
          </View>

          <View style={{marginTop: 40}}>
            <CustomButton
              buttonName={!loading && 'Sign In'}
              size="large"
              //   onPress={() => Login(username, password)}
              onPress={handleSubmit(Login)}
              disabled={loading}>
              {loading && <ActivityIndicator color="#7879F1" />}
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
    color: '#F2F2F2',
    fontWeight: '400',
    alignSelf: 'center',
    lineHeight: 40,
    marginTop: '24%',
    width: 200,
    textAlign: 'center',
    fontSize: 26,
    fontFamily: 'Montserrat-SemiBold',
  },
  subTagline: {
    color: '#F2F2F2',
    fontWeight: '400',
    alignSelf: 'center',
    lineHeight: 24,
    marginTop: 28,
    width: 200,
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
  },
  helpLinkContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    marginTop: 20,
  },
  signUpHelpLink: {
    fontSize: 12,
    textDecorationLine: 'underline',
    color: '#F2F2F2',
    lineHeight: 15,
    fontFamily: 'Montserrat-Regular',
  },
});
