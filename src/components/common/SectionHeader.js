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
    fontWeight: '600',
    padding: 10,
    borderColor: '#cccccc',
    borderWidth: 1,
    backgroundColor: '#ffffff'
  }
});

export { SectionHeader };
