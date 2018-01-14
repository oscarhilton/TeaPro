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
import ConnectionRetry from '../components/ConnectionRetry';
import Login from '../components/Login';
import { SectionHeader, Button } from '../components/common';

import { goToScene } from '../actions/navActions';

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


class PostsScreen extends Component {
  static navigationOptions = ({navigation}) => {
    const {params = {}} = navigation.state;
    return {
      title: 'Posts',
      headerRight: <Button onPress={params.handleNewPost}>Write a new post</Button>
    };
  };

  componentWillMount() {
    this.props.fetchHotPosts();
    this.props.returnHotPosts();

    const { user } = this.props;
    if (user) {
      this.fetchData();
    }
  }

  componentDidMount() {
    this.props.navigation.setParams({ handleNewPost: this.NewPost });
  }

  NewPost() {
    alert(7);
    // this.props.goToScene('WritePostScreen');
  }

  fetchData() {
    if (this.props.user) {
      this.props.fetchFollowerPosts();
      this.props.returnFollowerPosts(this.props.user.followers);
      this.props.getNotifications(this.props.user._id);
    } else {
      alert('not signed in');
    }
  }

  handleGoToWritePost() {
    this.props.goToScene('WritePostScreen');
  }

  renderNotifications() {
    const { notifications, user, connection } = this.props;
    if (connection.connected) {
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
    }
    return;
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
    return <Login />;
  }

  checkConnecton() {
    const { connection } = this.props;
    console.log(connection);
    if (connection.connected || connection.connected === null) {
      const { hot, followers } = this.props.posts;
      return (
        <ScrollView style={styles.container}>
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
    return <ConnectionRetry />;
  }

  render() {
    return (
      <View style={styles.container}>
        {this.checkConnecton()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const mapStateToProps = ({ auth, notifications, posts, connection }) => {
  return {
    user: auth.user,
    notifications,
    posts,
    connection
  };
};

export default connect(mapStateToProps, {
  goToScene,
  fetchNotifications,
  getNotifications,
  fetchHotPosts,
  returnHotPosts,
  fetchFollowerPosts,
  returnFollowerPosts
})(PostsScreen);
