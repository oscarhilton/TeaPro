import React from 'react';
import { View, Image } from 'react-native';

const CircleAvatar = ({ width, addStyle, uri }) => {
  return (
    <View >
      <Image
        style={[{
            width,
            height: width,
            borderRadius: width / 2,
            borderWidth: 1,
            borderColor: 'white'
          }, addStyle]}
        source={{ uri }}
      />
    </View>
  );
};

export default CircleAvatar;
