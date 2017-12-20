/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import { fetchUsersList, returnUsersList } from '../actions/userActions';
import { goToScene } from '../actions/navActions';

class UserFollowScoreButton extends Component {
  handleShowUsers() {
    const { users, followScore, loading } = this.props;
    if (followScore > 0 && !loading) {
      this.props.fetchUsersList();
      this.props.returnUsersList(users);
      this.props.goToScene('UserList');
    }
  }

  render() {
    const { users, followScore, followText } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={this.handleShowUsers.bind(this)}
        >
          <Text>{followScore} {followText}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(212,249,196)',
    padding: 10
  },
});

const mapStateToProps = ({ users }) => {
  return {
    loading: users.userList.loading
  };
};

export default connect(mapStateToProps, {
  fetchUsersList,
  returnUsersList,
  goToScene
})(UserFollowScoreButton);
