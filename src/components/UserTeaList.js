import React, { Component } from 'react';
import { View, Text } from 'react-native';
import TeaCardList from '../components/TeaCardList';
import { SectionHeader, Spinner } from '../components/common';

class UserTeaList extends Component {
  renderCupboard() {
    const { heading } = this.props;
    const { loading, teas } = this.props.data;
    switch (loading) {
      case null:
        return (<Text>NULL</Text>);
      case true:
        return (
          <View style={{ backgroundColor: '#f2f2f2', height: 165 }}>
            <SectionHeader
              heading={heading}
            />
            <Spinner />
          </View>
        );
      case false:
        return (
          <View style={{ height: 165 }}>
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
          <View style={{ backgroundColor: '#f2f2f2', height: 165 }}>
            <SectionHeader
              heading={heading}
            />
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
