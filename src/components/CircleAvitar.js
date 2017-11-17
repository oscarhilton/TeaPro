import React from 'react';
import { View, Image } from 'react-native';

const CircleAvitar = ({ width, addStyle, uri }) => {
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
        source={{ uri: 'https://picsum.photos/100/100/?random' }}
      />
    </View>
  );
};

export default CircleAvitar;
