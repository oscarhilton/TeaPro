import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import { Root } from './src/navigators/AppNavigator';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

export default class App extends Component<{}> {
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }} >
          <Root />
        </View>
      </Provider>
    );
  }
}
