import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { connect } from 'react-redux';
import { goBack } from '../actions/navActions';
import { CloseButton } from '../components/common';
import { SEARCH_OFFSET } from './styleHelpers';
import TeaCard from '../components/TeaCard';

const background = require('../assets/images/background-teapro.png');

class ViewTeaHeader extends Component {
  renderImage() {
    const { userImages } = this.props.tea;
    if (userImages.length > 0) {
      console.log(userImages);
      const lastImage = userImages[userImages.length - 1];
      return (
        <Image
          style={styles.imageStyle}
          blurRadius={0}
          source={{ uri: lastImage.path }}
        />
      );
    }
  }
  render() {
    const { tea } = this.props;
    const { title, category, origin } = tea;
    return (
      <View style={styles.componentStyle}>
        <CloseButton
          onPress={() => { this.props.goBack(); }}
          addStyle={styles.closeStyle}
        />
        <View style={styles.detailsStyle}>
          <View style={styles.teaCardContainer}>
            <TeaCard
              tea={tea}
              addStyle={styles.teaCardStyle}
            />
          </View>
          <View style={styles.detailsTextContainerStyle}>
            <Text
              style={[styles.headerTextStyle]}
            >
              {title}
            </Text>
            <Text
              style={styles.originTextStyle}
            >
              {`${category.title} tea from ${origin}`}
            </Text>
          </View>
        </View>
        {this.renderImage()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  componentStyle: {
    height: 400,
    position: 'relative'
  },
  closeStyle: {
    position: 'absolute',
    marginTop: SEARCH_OFFSET + 15,
    margin: 10,
    top: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  detailsStyle: {
    position: 'absolute',
    zIndex: 1,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
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
    width: 90,
    justifyContent: 'center',
    alignItems: 'center'
  },
  detailsTextContainerStyle: {
    position: 'absolute',
    backgroundColor: 'rgba(25,25,25,0.5)',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    padding: 10,
    bottom: 0,
    left: 0,
    width: '100%'
  },
  headerTextStyle: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 2
  },
  originTextStyle: {
    color: 'white',
    fontSize: 12,
  }
});

export default connect(null, { goBack })(ViewTeaHeader);
