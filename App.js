import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import DiscoverScene from './src/components/DiscoverScene';
import BottomNavigation from './src/components/BottomNavigation';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

export default class App extends Component<{}> {
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }} >
          <DiscoverScene />
          <BottomNavigation />
        </View>
      </Provider>
    );
  }
}
