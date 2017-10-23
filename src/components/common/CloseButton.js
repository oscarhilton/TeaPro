import React from 'react';
import { Image, TouchableOpacity, StyleSheet } from 'react-native';

const closeImage = require('../../assets/images/cancel.png');

const CloseButton = ({ onPress, addStyle }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.touchableStyle}
    >
      <Image
        style={[styles.closeStyle, addStyle]}
        source={closeImage}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchableStyle: {
    padding: 20,
    zIndex: 9
  },
  closeStyle: {
    width: 15,
    height: 15
  },
});

export { CloseButton };
