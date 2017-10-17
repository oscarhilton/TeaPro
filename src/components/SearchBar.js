import React, { Component } from 'react';
import { View, TextInput } from 'react-native';

class SearchBar extends Component {
  render() {
    return (
      <View>
        <TextInput
          secureTextEntry={secureTextEntry}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          style={styles.inputStyle}
        />
      </View>
    );
  }
}

export default SearchBar;
