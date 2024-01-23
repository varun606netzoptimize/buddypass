import React from 'react';

import Navigation from './src/Navigation';
import Toast from 'react-native-toast-message';

import {AuthProvider} from './src/Context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Navigation />
      <Toast />
    </AuthProvider>
  );
}

export default App;
