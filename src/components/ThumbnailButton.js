import React, { Component } from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet
} from 'react-native';
import { api } from '../api';

const { width } = Dimensions.get('window');

class ThumbnailButton extends Component {
  render() {
    const { title, image } = this.props.data;
    const showImage = image ?
          <Image source={{ uri: image.path }} style={styles.imageStyle} /> :
          null;
    const clickStyle =
          this.props.clicked ?
          { backgroundColor: 'rgba(185,39,72,0.9)' } :
          { backgroundColor: 'rgba(0,0,0,0.4)' };
    return (
      <TouchableOpacity
        style={styles.componentStyle}
        onPress={this.props.handleClick}
      >
        <View
          style={[styles.textContainerStyle, clickStyle]}
        >
          <Text
            style={styles.textStyle}
          >
            {title}
          </Text>
        </View>
        {showImage}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  componentStyle: {
    position: 'relative',
    zIndex: 9
  },
  textContainerStyle: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    justifyContent: 'center',
    zIndex: 2,
    padding: 5
  },
  textStyle: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '600'
  },
  imageStyle: {
    width: width / 3,
    height: width / 3,
    zIndex: 1
  }
});

export default ThumbnailButton;
