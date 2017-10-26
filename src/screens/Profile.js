import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { loginWithGoogle } from '../actions/authActions';
import Login from '../components/Login';

class ProfileScene extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Login />
      </View>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps, { loginWithGoogle })(ProfileScene);
