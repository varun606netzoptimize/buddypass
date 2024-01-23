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
  TextInput,
} from 'react-native';

export default function CustomTextInput({placeholder, value, ...exraProps}) {
  return (
    <TextInput
      style={styles.inputStyle}
      {...exraProps}
      placeholder={placeholder}
      value={value}
      placeholderTextColor={'#F2F2F2'}
    />
  );
}

const styles = StyleSheet.create({
  inputStyle: {
    height: 60,
    width: '100%',
    borderRadius: 100,
    backgroundColor: '#4E4E4E',
    alignSelf: 'center',
    fontSize: 16,
    color: '#F2F2F2',
    paddingLeft: 20,
    paddingRight: 20,
    fontFamily: 'Montserrat-Regular',
  },
});
