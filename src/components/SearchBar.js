import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ''
    };
  }

  handleSearch() {
    if (this.state.searchText.length > 5) {
      console.log('start the search please mr computa');
      return (
        <View style={styles.resultsStyle}>
          <Text>Search results</Text>
        </View>
      );
    }
  }

  handleChange(searchText) {
    this.setState({ searchText });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.inputContainerStyle}>
          <TextInput
            value={this.state.searchText}
            onChangeText={this.handleChange.bind(this)}
            style={styles.inputStyle}
          />
        </View>
        {this.handleSearch()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainerStyle: {
    flex: 1,
    height: 30,
    backgroundColor: 'rgba(255,255,255,0.8)',
    margin: 10,
    padding: 10,
    borderRadius: 50
  },
  inputStyle: {
    fontSize: 14
  },
  resultsStyle: {
    backgroundColor: 'white',
    height: 40,
    padding: 10
  }
});

export default SearchBar;
