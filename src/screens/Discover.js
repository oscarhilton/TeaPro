import React, { Component } from 'react';
import {
  ScrollView,
  View,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import { requestDiscoverCategories, returnDiscoverCategories } from '../actions/teaActions';
import { fetchUser } from '../actions/authActions';
import { SectionHeader, Spinner } from '../components/common';
import { SEARCH_OFFSET } from '../components/styleHelpers';
import TeaCardList from '../components/TeaCardList';
import HeroTea from '../components/HeroTea';
import Header from '../components/Header';

class DiscoverScene extends Component {
  // static navigationOptions = {
  //   title: 'Home',
  // }

  async componentWillMount() {
    await this.props.fetchUser();
    this.props.requestDiscoverCategories();
    this.props.returnDiscoverCategories(this.props.auth.user._id);
  }

  renderDiscoverCategories() {
    const { loading } = this.props.auth.discover.categories;
    if (!loading) {
      const { list } = this.props.auth.discover.categories;
      console.log(list);
      return (
        list.map((cat) => {
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
    return (
      <View stlye={{ flex: 1, backgroundColor: 'white' }}>
        <Spinner />
      </View>
    );
  }

  renderContent() {
    return (
      <View>
        <Header />
        <ScrollView style={styles.componentStyle}>
          <HeroTea />
          {this.renderDiscoverCategories()}
        </ScrollView>
      </View>
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
    // paddingTop: SEARCH_OFFSET
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
  requestDiscoverCategories,
  returnDiscoverCategories,
  fetchUser
})(DiscoverScene);
