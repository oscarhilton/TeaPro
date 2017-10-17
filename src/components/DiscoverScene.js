import React, { Component } from 'react';
import {
  ScrollView,
  View
} from 'react-native';
import { connect } from 'react-redux';
import { getAllCategories } from '../actions';
import { SectionHeader } from './common';
import TeaCardList from './TeaCardList';
import HeroTea from './HeroTea';

class DiscoverScene extends Component {
  componentDidMount() {
    this.props.getAllCategories();
  }

  renderSections() {
    const { categories } = this.props.teaList.teas;
    return (
      categories.map((cat) => {
        return (
          <View key={cat._id}>
            <SectionHeader heading={`All ${cat.title} teas`} />
            <TeaCardList teaList={cat.teas} colour={cat.background} />
          </View>
        );
      })
    );
  }

  render() {
    console.log(this.props.teaList.teas.categories, 'PROPS');
    return (
      <ScrollView>
        <HeroTea />
        {this.renderSections()}
      </ScrollView>
    );
  }
}

const mapStateToProps = ({ teaList }) => {
  return { teaList };
};

export default connect(mapStateToProps, { getAllCategories })(DiscoverScene);
