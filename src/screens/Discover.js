import React, { Component } from 'react';
import {
  ScrollView,
  View,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import { getAllCategories } from '../actions';
import { SectionHeader } from '../components/common';
import TeaCardList from '../components/TeaCardList';
import HeroTea from '../components/HeroTea';

class DiscoverScene extends Component {
  componentDidMount() {
    this.props.getAllCategories();
  }

  renderSections() {
    console.log(this.props);
    const { categories } = this.props.teaList.teas;
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
              colour={cat.background}
            />
          </View>
        );
      })
    );
  }

  render() {
    return (
      <ScrollView style={styles.componentStyle}>
        <HeroTea />
        {this.renderSections()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  componentStyle: {
    backgroundColor: 'white'
  }
});

const mapStateToProps = ({ teaList }) => {
  return { teaList };
};

export default connect(mapStateToProps, { getAllCategories })(DiscoverScene);
