import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import DiscoverScene from './components/DiscoverScene';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="discover" component={DiscoverScene} />
    </Router>
  );
}

export default RouterComponent;
