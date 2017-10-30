import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';

const TextArea = ({ label, value, onChangeText, placeholder, numberOfLines }) => {
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.labelStyle}>{ label }</Text>
      <TextInput
        placeholder={placeholder}
        multiline={true}
        autoCorrect={false}
        numberOfLines={numberOfLines}
        value={value}
        onChangeText={onChangeText}
        style={styles.inputStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    color: '#000',
    padding: 10,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#cccccc',
    fontSize: 14,
    lineHeight: 23,
    height: 250
  },
  labelStyle: {
    fontSize: 14,
    paddingBottom: 10
  },
  containerStyle: {
    height: 300,
    padding: 10,
    backgroundColor: 'white'
  }
});

export { TextArea };
