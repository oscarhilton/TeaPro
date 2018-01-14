/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';

import CircleAvatar from './CircleAvatar';

import { goToScene } from '../actions/navActions';
import { loadUser, displayUser } from '../actions/userActions';

class ViewUserAvatar extends Component {
  handleViewUser() {
    this.props.loadUser();
    this.props.displayUser(this.props.id);
    this.props.goToScene('UserProfile');
  }

  render() {
    return (
      <TouchableOpacity
        onPress={this.handleViewUser.bind(this)}
        style={styles.authorStyle}
      >
        <CircleAvatar uri={this.props.avatar} width={this.props.width} />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default connect(null, {
  goToScene,
  loadUser,
  displayUser
})(ViewUserAvatar);
