/* @flow */

import React, { Component } from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';

import UserListItem from '../components/UserListItem';

import {
  loadUser,
  displayUser
} from '../actions/userActions';
import { goToScene } from '../actions/navActions';

class UserListScreen extends Component {
  handleShowUser(user) {
    this.props.loadUser();
    this.props.displayUser(user);
    this.props.goToScene('UserProfile');
  }

  renderUserList() {
    const { users } = this.props;
    const { loading, list } = users;
    switch (loading) {
      case null:
        return;
      case true:
        return <Text>Loading</Text>;
      case false:
        const userList = list.map(
          user =>
          <UserListItem
              user={user}
              handleClick={this.handleShowUser.bind(this)}
          />);
        return (
          <View style={styles.container}>
            {userList}
          </View>
        );
      default:
        return;
    }
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        {this.renderUserList()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const mapStateToProps = ({ users }) => {
  return {
    users: users.userList
  };
};

export default connect(mapStateToProps, {
  loadUser,
  displayUser,
  goToScene
})(UserListScreen);
