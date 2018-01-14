/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import Tag from './Tag';

export default class TagsList extends Component {
  render() {
    const renderTags = this.props.tags.map(tag => <Tag key={tag.title} title={tag.title} />);
    return (
      <View style={styles.container}>
        {renderTags}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'white',
    padding: 5
  },
});
