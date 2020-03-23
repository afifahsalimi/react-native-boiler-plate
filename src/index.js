import React from 'react';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import configureStore from '@redux';
import App from './App';

export default () => (
  <Provider store={configureStore()}>
    <App />
  </Provider>
);
