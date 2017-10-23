import React, { Component } from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import { requestTeas, getAllCategories } from '../actions';
import { SectionHeader, Spinner } from '../components/common';
import TeaCardList from '../components/TeaCardList';
import HeroTea from '../components/HeroTea';

class DiscoverScene extends Component {
  componentDidMount() {
    this.props.requestTeas();
    this.props.getAllCategories();
  }

  renderSections() {
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

  renderContent() {
    if (this.props.teaList.loading) {
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
    backgroundColor: 'white'
  },
  spinnerStyle: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  }
});

const mapStateToProps = ({ teaList }) => {
  return { teaList };
};

export default connect(mapStateToProps, { getAllCategories, requestTeas })(DiscoverScene);
