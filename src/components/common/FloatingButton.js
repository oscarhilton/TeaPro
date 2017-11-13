import React from 'react';
import { Text, TouchableHighlight, StyleSheet } from 'react-native';
import {
  PRIMARY_COLOUR,
  PRIMARY_HIGHLIGHT_COLOUR
} from '../styleHelpers';

const FloatingButton = ({ onPress, children, style }) => {
  return (
    <TouchableHighlight
      onPress={onPress}
      style={[styles.buttonStyle, style]}
      underlayColor={PRIMARY_HIGHLIGHT_COLOUR}
    >
      <Text style={styles.textStyle}>
        {children}
      </Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    alignSelf: 'center',
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: PRIMARY_COLOUR,
    height: 40,
    borderRadius: 50
  }
});

export { FloatingButton };
