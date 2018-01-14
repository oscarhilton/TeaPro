import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import IconText from '../IconText';

const VoteButton = ({ onPress, votes, image, style }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
    >
      <IconText uri={image} text={votes} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export { VoteButton };
