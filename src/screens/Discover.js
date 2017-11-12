import React, { Component } from 'react';
import {
  ScrollView,
  View,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import { requestCategories, returnAllCategories } from '../actions/categoryActions';
import { fetchUser } from '../actions/authActions';
import { SectionHeader, Spinner } from '../components/common';
import { SEARCH_OFFSET } from '../components/styleHelpers';
import TeaCardList from '../components/TeaCardList';
import HeroTea from '../components/HeroTea';

class DiscoverScene extends Component {
  componentWillMount() {
    this.props.requestCategories();
    this.props.returnAllCategories();
    this.props.fetchUser();
  }

  renderSections() {
    const { categories } = this.props.categories;
    console.log(categories);
    return (
      categories.map((cat) => {
        return (
          <View key={cat._id}>
            <SectionHeader
              heading={`All ${cat.title} teas`}
            />
            <TeaCardList
              navigate={this.props.navigation.navigate}
              teaList={cat.teas}
            />
          </View>
        );
      })
    );
  }

  renderContent() {
    if (this.props.categories.loading) {
      return (
        <Spinner style={styles.spinnerStyle} />
      );
    }
    return (
      <ScrollView style={styles.componentStyle}>
        <HeroTea />
        {this.renderSections()}
      </ScrollView>
    );
  }

  render() {
    return (
      <View style={{ flex: 1 }} >
        {this.renderContent()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  componentStyle: {
    backgroundColor: '#18061B',
    paddingTop: SEARCH_OFFSET
  },
  spinnerStyle: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  }
});

const mapStateToProps = ({ categories, auth }) => {
  return { categories, auth };
};

export default connect(mapStateToProps, {
  requestCategories,
  returnAllCategories,
  fetchUser
})(DiscoverScene);
