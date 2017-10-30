import React, { Component } from 'react';
import { View, Text } from 'react-native';
import TeaCardList from '../components/TeaCardList';
import { SectionHeader, Spinner } from '../components/common';

class UserTeaList extends Component {
  renderCupboard() {
    const { heading } = this.props;
    const { loading, teas } = this.props.cupboard;
    switch (loading) {
      case true:
        return (
          <Spinner />
        );
      case false:
        return (
          <View>
            <SectionHeader
              heading={heading}
            />
            <TeaCardList
              teaList={teas}
            />
          </View>
        );
      default:
        return (
          <View>
            <SectionHeader
              heading={heading}
            />
            <Text>Couldn't fetch teas :-(</Text>
          </View>
        );
    }
  }

  render() {
    return (
      <View>
        {this.renderCupboard()}
      </View>
    );
  }
}

export default UserTeaList;
