import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';
import Router from './src/Router';
import BottomNavigation from './src/components/BottomNavigation';

export default class App extends Component<{}> {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Router />
          <BottomNavigation />
        </View>
      </Provider>
    );
  }
}
