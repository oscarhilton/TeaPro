import React, { Component } from 'react';
import { BackHandler, View } from 'react-native';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import SocketIOClient from 'socket.io-client';
import { addNavigationHelpers, NavigationActions } from 'react-navigation';

import { RootNavigator } from './src/navigators/RootNavigator';
import reducers from './src/reducers';

import { api } from './src/api';

import Notifications from './src/components/Notifications';
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
      <View style={{ flex: 1 }}>
        <RootNavigator
          navigation={addNavigationHelpers({
            dispatch,
            state: nav,
            socket: this.state.socket
          })}
        />
        <Notifications
          user={this.props.auth.user}
          socket={this.state.socket}
        />
      </View>
    );
  }
}

const mapStateToProps = ({ nav, auth }) => ({
  nav,
  auth
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
