/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import UserPostList from './UserPostList';
import { SectionHeader } from './common';

class UserPostCollection extends Component {
  renderPosts() {
    const { collection, loading } = this.props;
    switch (loading){
      case true:
        return <Text>Loading</Text>;
      case false:
        return <UserPostList posts={collection} />;
      case null:
        return <Text>ready</Text>;
      default:
        return <Text>ready</Text>;
    }
  }

  render() {
    const { heading } = this.props;
    return (
      <View style={styles.container}>
        <SectionHeader heading={heading} />
        {this.renderPosts()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const mapStateToProps = ({ posts }) => {
  return { posts };
};

export default UserPostCollection;
