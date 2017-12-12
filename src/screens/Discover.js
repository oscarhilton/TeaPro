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
import HeroTea from '../components/HeroTea';
import Header from '../components/Header';
import Notifications from '../components/Notifications';

class DiscoverScene extends Component {
  async componentWillMount() {
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
      const { list } = this.props.auth.discover.categories;
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

  renderNotifications() {
    if (this.props.auth.loggedIn) {
      return (
        <View style={{ position: 'absolute', bottom: 0, width: '100%' }}>
          <Notifications
            user={this.props.auth.user}
            socket={this.props.navigation.socket}
          />
        </View>
      );
    }
    return (<Text>User not signed in</Text>);
  }

  renderContent() {
    return (
      <View style={{ flex: 1 }}>
        <Header />
        <ScrollView style={styles.componentStyle}>
          <HeroTea />
          {this.renderDiscoverCategories()}
        </ScrollView>
        {this.renderNotifications()}
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
    backgroundColor: '#18061B'
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
