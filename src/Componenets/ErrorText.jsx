/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-dupe-keys */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import {StyleSheet, Text} from 'react-native';

export default function ErrorText({children}) {
  return <Text style={styles.error}>{children}</Text>;
}

const styles = StyleSheet.create({
  error: {
    color: '#EA4831',
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
  },
});
