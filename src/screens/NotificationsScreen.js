/* @flow */

import React, { Component } from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';

import PostForm from '../components/PostForm';
import NotificationItem from '../components/NotificationItem';
import UserPostCollection from '../components/UserPostCollection';
import { SectionHeader } from '../components/common';

const notificationIcon = require('../assets/images/notification.png');

import {
  fetchNotifications,
  getNotifications
} from '../actions/notificationActions';

import {
  fetchHotPosts,
  returnHotPosts,
  fetchFollowerPosts,
  returnFollowerPosts
} from '../actions/postActions';

class NotificationsScreen extends Component {
  static navigationOptions = () => ({
    title: 'Notifications',
    tabBarIcon: () => (
      <Image source={notificationIcon} style={{ width: 18, height: 18 }} />
    )
  });

  componentWillMount() {
    this.props.fetchHotPosts();
    this.props.returnHotPosts();
    if (this.props.user) {
      this.props.fetchFollowerPosts();
      this.props.returnFollowerPosts(this.props.user.followers);
      this.props.getNotifications(this.props.user._id);
    } else {
      alert('not signed in');
    }
  }

  renderNotifications() {
    const { notifications, user } = this.props;
    if (user) {
      switch (notifications.loading) {
        case null:
          return <Text>NULL</Text>;
        case true:
          return <Text>Loading</Text>;
        case false:
          const { list } = notifications;
          const notificationList = list.map(note => {
            return (
              <View>
                <NotificationItem
                  timestamp={note.timestamp}
                  message={note.message}
                />
              </View>
            );
           });
          return (
            <View>
              <SectionHeader heading={'Notifications'} />
              {notificationList}
            </View>
          );
        default:
          return <Text>Default</Text>;
      }
    }
    return <Text>No User!!!</Text>;
  }

  renderPostForm() {
    const { user } = this.props;
    if (user) {
      return <PostForm />;
    }
  }

  renderFollowerPosts() {
    const { user } = this.props;
    const { followers } = this.props.posts;
    if (user) {
      return (
        <UserPostCollection
          heading={'Follower Posts'}
          collection={followers.list}
          loading={followers.loading}
        />
      );
    }
    return <Text>No User</Text>;
  }

  render() {
    const { hot, followers } = this.props.posts;
    return (
      <ScrollView style={styles.container}>
        <SectionHeader heading={'Posts'} />
        {this.renderPostForm()}
        <UserPostCollection
          heading={'Hot Posts'}
          collection={hot.list}
          loading={hot.loading}
        />
        {this.renderFollowerPosts()}
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

const mapStateToProps = ({ auth, notifications, posts }) => {
  return {
    user: auth.user,
    notifications,
    posts
  };
};

export default connect(mapStateToProps, {
  fetchNotifications,
  getNotifications,
  fetchHotPosts,
  returnHotPosts,
  fetchFollowerPosts,
  returnFollowerPosts
})(NotificationsScreen);
