import React from 'react';
import { View, Text } from 'react-native';

const SearchResult = (props) => {
  return (
    <View style={{ padding: 10 }}>
      <Text>{props.data.title}</Text>
    </View>
  );
};

export default SearchResult;
