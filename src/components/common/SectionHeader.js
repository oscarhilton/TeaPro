import React from 'react';
import { Text, StyleSheet } from 'react-native';

const SectionHeader = props => {
  return (
    <Text style={styles.headingStyle}>{props.heading}</Text>
  );
};

const styles = StyleSheet.create({
  headingStyle: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
    padding: 10
  }
});

export { SectionHeader };
