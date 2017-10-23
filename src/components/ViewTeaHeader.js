import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { connect } from 'react-redux';
import { goBack } from '../actions';
import { CloseButton } from '../components/common';
import TeaCard from '../components/TeaCard';

const background = require('../assets/images/background-teapro.png');

class ViewTeaHeader extends Component {
  render() {
    return (
      <View style={styles.componentStyle}>
        <CloseButton
          onPress={() => { this.props.goBack(); }}
          addStyle={styles.closeStyle}
        />
        <View style={styles.detailsStyle}>
          <View style={styles.teaCardContainer}>
            <TeaCard
              tea={this.props.tea}
              addStyle={styles.teaCardStyle}
            />
          </View>
          <Text style={styles.headerTextStyle}>{this.props.tea.title}</Text>
          <Text
            style={styles.originTextStyle}
          >
            {`${this.props.tea.category.title} tea from ${this.props.tea.origin}`}
          </Text>
        </View>
        <Image
          style={styles.imageStyle}
          blurRadius={0}
          source={background}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  componentStyle: {
    height: 300,
    position: 'relative'
  },
  closeStyle: {
    position: 'absolute',
    margin: 20,
    top: 0,
    right: 0
  },
  teaCardStyle: {
    shadowColor: '#000000',
    shadowOffset: { height: 20, width: 10 },
    shadowOpacity: 0.4
  },
  detailsStyle: {
    justifyContent: 'center',
    margin: 10,
    position: 'absolute',
    zIndex: 1,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    flex: 1
  },
  imageStyle: {
    height: 400,
    zIndex: 0,
    opacity: 0.5,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  teaCardContainer: {
    height: 100,
    width: 90
  },
  headerTextStyle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    position: 'absolute',
    bottom: 10,
    left: 0,
    marginRight: 100
  },
  originTextStyle: {
    color: 'white',
    letterSpacing: 2,
    fontSize: 12,
    position: 'absolute',
    bottom: 10,
    right: 0
  }
});

export default connect(null, { goBack })(ViewTeaHeader);
