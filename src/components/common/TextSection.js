import React from 'react';
import {
   View,
   Text,
   StyleSheet
 } from 'react-native';

const TextSection = props => {
  return (
    <View style={styles.componentStyle} >
      <Text style={styles.textStyle} >{props.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  componentStyle: {
    backgroundColor: '#ffffff',
    padding: 10,
    paddingTop: 15,
    paddingBottom: 25
  },
  textStyle: {
    color: '#212121',
    fontSize: 12
  }
});

export { TextSection };
