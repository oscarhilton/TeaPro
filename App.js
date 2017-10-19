import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { addNavigationHelpers } from 'react-navigation';
import { Navigator } from './src/navigators/AppNavigator';
import reducers from './src/reducers';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

const App = ({ dispatch, nav }) => {
  return (
    <Navigator
      navigation={addNavigationHelpers({
        dispatch,
        state: nav
      })}
    />
  );
};

const mapStateToProps = (state) => ({
  nav: state.nav,
});

const AppWithNavigationState = connect(mapStateToProps)(App);

export default class Root extends Component<{}> {
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }} >
          <AppWithNavigationState />
        </View>
      </Provider>
    );
  }
}
