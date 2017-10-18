import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ViewTeaScene = () => {
  return (
    <View style={styles.backgroundStyle}>
      <Text>Hello</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex: 1
  }
});

export default ViewTeaScene;
