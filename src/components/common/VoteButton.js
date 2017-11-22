import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

const VoteButton = ({ onPress, children, style }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
    >
      <View style={[styles.container, style]}>
        {children}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export { VoteButton };
