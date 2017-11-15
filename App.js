import React, { Component } from 'react';
import { View, BackHandler } from 'react-native';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { addNavigationHelpers, NavigationActions } from 'react-navigation';
import { Navigator } from './src/navigators/AppNavigator';
import reducers from './src/reducers';
import Header from './src/components/Header';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

class App extends Component {
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }
  onBackPress = () => {
    const { dispatch, nav } = this.props;
    if (nav.index === 0) {
      return false;
    }
    dispatch(NavigationActions.back());
    return true;
  }
  render() {
    const { dispatch, nav } = this.props;
    return (
      <Navigator
        navigation={addNavigationHelpers({
          dispatch,
          state: nav
        })}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  nav: state.nav,
});

const AppWithNavigationState = connect(mapStateToProps)(App);

export default class Root extends Component<{}> {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}
