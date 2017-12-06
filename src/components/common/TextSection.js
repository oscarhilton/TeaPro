import React from 'react';
import {
   View,
   Text,
   StyleSheet
 } from 'react-native';

const TextSection = props => {
  return (
    <View style={styles.componentStyle} >
      <Text style={[styles.textStyle, props.textStyle]} >{props.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  componentStyle: {
    backgroundColor: '#ffffff',
    padding: 10,
    paddingBottom: 15
  },
  textStyle: {
    color: '#212121',
    fontSize: 12
  }
});

export { TextSection };
