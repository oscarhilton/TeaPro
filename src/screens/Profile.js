import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Button } from '../components/common';
import { loginWithGoogle } from '../actions/authActions';
import ProfileInfo from '../components/ProfileInfo';

class ProfileScene extends Component {
  render() {
    return (
      <View>
        <ProfileInfo auth={this.props.auth[0]} />
        <Button
          onPress={() => { this.props.loginWithGoogle(); }}
        >
          Login with google
        </Button>
      </View>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps, { loginWithGoogle })(ProfileScene);
