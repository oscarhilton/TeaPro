/* @flow */

import React, { Component } from 'react';
import {
  View,
  Image,
  StyleSheet,
} from 'react-native';

const GalleryImage = ({ photo }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageStyle}
        source={{ uri: photo.path }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  imageStyle: {
    width: '100%',
    height: '100%'
  }
});

export default GalleryImage;
