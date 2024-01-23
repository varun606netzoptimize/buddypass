/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';
import {Buddypass_Base_URL} from '@env';

export const AuthContext = createContext();

export const AuthProvider = ({children, navigation}) => {
  const [authToken, setAuthToken] = useState(null);

  return (
    <AuthContext.Provider value={{authToken, setAuthToken}}>
      {children}
    </AuthContext.Provider>
  );
};
