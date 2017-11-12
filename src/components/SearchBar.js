import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { startSearch, returnSearch, endSearch } from '../actions/searchActions';
import { Spinner } from './common';
import SearchResult from './SearchResult';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ''
    };
  }

  handleChange(searchText) {
    this.setState({ searchText });

    if (this.state.searchText.length < 2) {
      this.props.endSearch();
    } else {
      this.props.startSearch();
      this.props.returnSearch(searchText);
    }
  }

  renderResults() {
    if (this.props.search.loading) {
      return (
        <View style={[styles.resultsStyle, { padding: 10 }]}>
          <Spinner size='small' />
        </View>
      );
    } else if (this.props.search.results.length > 0) {
      const results = this.props.search.results.map((result) => {
        return <SearchResult key={result.title} data={result} />;
      });
      return (
        <View style={styles.resultsStyle}>
          {results}
        </View>
      );
    }
  }

  render() {
    console.log(this.props.search);
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.inputContainerStyle}>
          <TextInput
            value={this.state.searchText}
            onChangeText={this.handleChange.bind(this)}
            style={styles.inputStyle}
          />
        </View>
        {this.renderResults()}
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
    backgroundColor: 'white'
  }
});

const mapStateToProps = ({ search }) => {
  return { search };
};

export default connect(mapStateToProps, { startSearch, returnSearch, endSearch })(SearchBar);
