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

var viewPassword = require('../Images/viewPassword.png');
var hidePassword = require('../Images/hidePassword.png');

export default function PasswordTextInput({
  placeholder,
  value,
  showPassword = true,
  togglePasswordVisiblity,
  ...exraProps
}) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputStyle}
        {...exraProps}
        placeholder={placeholder}
        value={value}
        secureTextEntry={showPassword}
        placeholderTextColor={'#F2F2F2'}
      />
      <TouchableOpacity
        style={styles.iconBox}
        onPress={togglePasswordVisiblity}>
        <Image
          source={showPassword ? viewPassword : hidePassword}
          style={{width: 20, height: 20}}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#4E4E4E',
    borderRadius: 100,
  },
  inputStyle: {
    height: 60,
    width: '86%',
    borderRadius: 100,
    backgroundColor: '#4E4E4E',
    alignSelf: 'center',
    fontSize: 16,
    color: '#F2F2F2',
    paddingLeft: 20,
    paddingRight: 20,
    fontFamily: 'Montserrat-Regular',
  },
  iconBox: {
    height: 60,
    width: '12%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
