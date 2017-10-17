import React from 'react';
import { Text, StyleSheet } from 'react-native';

const SectionHeader = props => {
  return (
    <Text style={styles.headingStyle}>{props.heading}</Text>
  );
};

const styles = StyleSheet.create({
  headingStyle: {
    fontSize: 12,
    fontWeight: '400',
    padding: 10,
    borderColor: '#cccccc',
    borderWidth: 1
  }
});

export { SectionHeader };
