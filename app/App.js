import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import AppNavigation from './navigation/AppNavigation';
import { store } from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      <AppNavigation />
    </Provider>
  );
};

export default App;
