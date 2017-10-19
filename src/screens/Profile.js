import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import ProfileInfo from '../components/ProfileInfo';

class ProfileScene extends Component {
  render() {
    return (
      <View>
        <ProfileInfo auth={this.props.auth[0]} />
      </View>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps)(ProfileScene);
