/* @flow */

import React, { Component } from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';

import PostForm from '../components/PostForm';
import NotificationItem from '../components/NotificationItem';
import HotPosts from '../components/HotPosts';
import FollowerPosts from '../components/FollowerPosts';
import { SectionHeader } from '../components/common';

import {
  fetchNotifications,
  getNotifications
} from '../actions/notificationActions';

class NotificationsScreen extends Component {
  static navigationOptions = () => ({
    title: 'Notifications',
  });

  componentWillMount() {
    this.props.getNotifications(this.props.user);
  }

  renderNotifications() {
    const { notifications } = this.props;
    switch (notifications.loading) {
      case null:
        return;
      case true:
        return <Text>Loading</Text>;
      case false:
        const { list } = notifications;
        const notificationList = list.map(note => {
          return (
            <NotificationItem
              timestamp={note.timestamp}
              message={note.message}
            />
          );
         });
        return notificationList;
      default:
        return;
    }
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <SectionHeader heading={'Posts'} />
        <PostForm />
        <HotPosts />
        <FollowerPosts />
        <SectionHeader heading={'Notifications'} />
        {this.renderNotifications()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const mapStateToProps = ({ auth, notifications }) => {
  return {
    user: auth.user._id,
    notifications
  };
};

export default connect(mapStateToProps, {
  fetchNotifications,
  getNotifications
})(NotificationsScreen);
