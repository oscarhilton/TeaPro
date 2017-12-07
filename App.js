import React, { Component } from 'react';
import { BackHandler } from 'react-native';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import SocketIOClient from 'socket.io-client';
import { addNavigationHelpers, NavigationActions } from 'react-navigation';

import { Navigator } from './src/navigators/AppNavigator';
import reducers from './src/reducers';

import { api } from './src/api';
// import Header from './src/components/Header';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      socket: SocketIOClient(api)
    };
  }
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
          state: nav,
          socket: this.state.socket
        })}
      />
    );
  }
}

const mapStateToProps = ({ nav }) => ({
  nav
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
