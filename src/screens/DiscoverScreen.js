import React, { Component } from 'react';
import {
  Text,
  ScrollView,
  View,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import SocketIOClient from 'socket.io-client';

import { requestDiscoverCategories, returnDiscoverCategories } from '../actions/teaActions';
import { fetchUser } from '../actions/authActions';

import { SectionHeader, Spinner } from '../components/common';
import { SEARCH_OFFSET } from '../components/styleHelpers';
import TeaCardList from '../components/TeaCardList';
import ConnectionRetry from '../components/ConnectionRetry';
import HeroTea from '../components/HeroTea';
import Header from '../components/Header';

class DiscoverScreen extends Component {
  static navigationOptions = () => ({
    title: 'Discover'
  });

  componentWillMount() {
    this.fetchData();
  }

  async fetchData() {
    const { user } = this.props.auth;
    await this.props.fetchUser();
    if (this.props.auth.loggedIn) {
      this.props.requestDiscoverCategories();
      this.props.returnDiscoverCategories(this.props.auth.user._id);
    }
  }

  renderDiscoverCategories() {
    const { loading } = this.props.auth.discover.categories;
    if (!loading) {
      const { navigate } = this.props.navigation;
      const { list } = this.props.auth.discover.categories;
      return (
        list.map((cat) => {
          return (
            <View key={cat._id}>
              <SectionHeader
                heading={`All ${cat.title} teas`}
              />
              <TeaCardList
                navigate={navigate}
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
      <View style={{ flex: 1 }}>
        <Header />
        <ScrollView style={styles.componentStyle}>
          <HeroTea />
          {this.renderDiscoverCategories()}
        </ScrollView>
      </View>
    );
  }

  checkConnecton() {
    const { connected } = this.props.connection;
    if (connected || connected == null) {
      return this.renderContent();
    }
    return <ConnectionRetry />;
  }

  render() {
    return (
      <View style={{ flex: 1 }} >
        {this.checkConnecton()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  spinnerStyle: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  }
});

const mapStateToProps = ({ categories, auth, connection }) => {
  return { categories, auth, connection };
};

export default connect(mapStateToProps, {
  requestDiscoverCategories,
  returnDiscoverCategories,
  fetchUser
})(DiscoverScreen);
