import React from 'react';
import { Image, TouchableOpacity, StyleSheet } from 'react-native';

const closeImage = require('../../assets/images/cancel.png');

const CloseButton = ({ onPress, addStyle }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.touchableStyle, addStyle]}
    >
      <Image
        style={[styles.closeStyle]}
        source={closeImage}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchableStyle: {
    padding: 12,
    zIndex: 9,
    borderRadius: 40
  },
  closeStyle: {
    width: 15,
    height: 15
  },
});

export { CloseButton };
