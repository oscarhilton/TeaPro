import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Dimensions,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import { startSearch, updateSearch, returnSearch, endSearch } from '../actions/searchActions';
import { Spinner } from './common';
import SearchResult from './SearchResult';
import TeaCardList from './TeaCardList';

const { height } = Dimensions.get('window');

const searchIcon = require('../assets/images/search.png');

class SearchBar extends Component {
  handleChange(text) {
    const { searchText } = this.props.search;
    this.props.startSearch();
    this.props.updateSearch(text);

    if (searchText.length < 1) {
      this.props.endSearch();
    } else {
      this.props.returnSearch(searchText);
    }
  }

  toggleOpen() {
    this.props.handleToggle();
  }

  renderSpinner() {
    if (this.props.search.loading) {
      return (
        <View style={{ width: 40 }}>
          <Spinner size='small' />
        </View>
      );
    }
  }

  renderResults() {
    if (this.props.search.results.length > 0) {
      const results = this.props.search.results.map((result) => {
        return <SearchResult key={result.title} data={result} />;
      });
      return (
        <View>
          <View>
            <TeaCardList teaList={this.props.search.results} />
          </View>
        </View>
      );
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.inputContainerStyle}>
          <Image
            source={searchIcon}
            style={styles.iconStyle}
          />
          <TextInput
            value={this.props.search.searchText}
            onChangeText={this.handleChange.bind(this)}
            style={styles.inputStyle}
          />
          {this.renderSpinner()}
          <TouchableOpacity
            style={styles.openToggle}
            onPress={this.toggleOpen.bind(this)}
          >

          </TouchableOpacity>
        </View>
        {this.renderResults()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainerStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 30,
    backgroundColor: 'rgb(255,255,255)',
    margin: 10,
    borderRadius: 50
  },
  iconStyle: {
    width: 12,
    height: 12,
    margin: 9
  },
  inputStyle: {
    fontSize: 14,
    flex: 1,
  },
  openToggle: {
    position: 'absolute',
    right: 0,
    width: 30,
    height: '100%'
  }
});

const mapStateToProps = ({ search, nav }) => {
  return { search, nav };
};

export default connect(mapStateToProps, { startSearch, updateSearch, returnSearch, endSearch })(SearchBar);
