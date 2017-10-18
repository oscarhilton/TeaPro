import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import ProfileInfo from './ProfileInfo';

class ProfileScene extends Component {
  render() {
    console.log(this.props);
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
