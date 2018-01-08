import React from 'react';
import { Text, StyleSheet } from 'react-native';

const SectionHeader = props => {
  return (
    <Text style={styles.headingStyle}>{props.heading.toUpperCase()}</Text>
  );
};

const styles = StyleSheet.create({
  headingStyle: {
    fontSize: 12,
    textAlign: 'left',
    fontFamily: 'Futura',
    color: '#212121',
    padding: 10,
    backgroundColor: 'white'
  }
});

export { SectionHeader };
