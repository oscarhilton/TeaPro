import React, { Component } from 'react';
import { View, Text } from 'react-native';
import TeaCardList from '../components/TeaCardList';
import { SectionHeader, Spinner } from '../components/common';

class UserTeaList extends Component {
  renderCupboard() {
    const { heading } = this.props;
    const { loading, teas } = this.props.data;
    console.log(loading, '<--- LOADING?')
    switch (loading) {
      case null:
        return (<Text>NULL</Text>);
      case true:
        return (
          <View style={{ backgroundColor: 'white' }}>
            <SectionHeader
              heading={heading}
            />
            <Spinner />
          </View>
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
