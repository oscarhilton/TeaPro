import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Animated, Easing } from 'react-native';
import { connect } from 'react-redux';
import StarRating from 'react-native-star-rating';

import { goBack } from '../actions/navActions';
import { CloseButton, Spinner } from './common';
// import { SEARCH_OFFSET } from '../components/styleHelpers';
import TeaCard from './TeaCard';

class ViewTeaHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flyIn: new Animated.Value(400)
    };
  }

  renderImage() {
    const { reviews } = this.props.teas.currentTea;
    if (reviews.length > 0) {
      const lastReview = reviews[0];
      console.log(lastReview);
      if (lastReview.image) {
        return (
          <Animated.Image
            style={[styles.imageStyle, {
              height: this.props.headerHeight,
              opacity: this.props.headerOpactiy
            }]}
            blurRadius={this.props.headerOpactiy}
            source={{ uri: lastReview.image.path }}
          />
        );
      }
    }
  }

  renderHeader() {
    const { collapse, currentTea, loaded } = this.props.teas;
    if (loaded) {
      Animated.timing(
      this.state.flyIn,
      {
        toValue: 0,
        duration: 700,
        easing: Easing.bezier(.27,.58,.69,1)
      }
      ).start();
      const numReviews = currentTea.reviews.length;
      const average = currentTea.score / numReviews;
      const roundedScore = isNaN(average) ? 0 : Math.round(average * 10) / 10;
      const { category, origin } = currentTea;
      return (
        <View>
          <Animated.View style={[styles.componentStyle, { height: this.props.headerHeight }]}>
            <CloseButton
              onPress={() => { this.props.goBack(); }}
              addStyle={styles.closeStyle}
            />
            <View style={styles.detailsStyle}>
              <Animated.View style={[styles.teaCardContainer, { marginTop: this.state.flyIn }]}>
                <TeaCard
                  tea={currentTea}
                  addStyle={styles.teaCardStyle}
                />
              </Animated.View>
              <View style={styles.detailsTextContainerStyle}>
                <Text
                  style={styles.originTextStyle}
                >
                  {`${category.title} tea from ${origin || 'unknown'}`}
                </Text>
                <View style={styles.ratingStyle}>
                  <StarRating
                    disabled
                    starSize={10}
                    starColor={'#212121'}
                    maxStars={5}
                    rating={roundedScore}
                    starColor={'#fff'}
                  />
                  <Text style={styles.reviewNumberText}>{numReviews} reviews</Text>
                </View>
              </View>
            </View>
            {this.renderImage()}
          </Animated.View>
        </View>
      );
    }
    return (
      <View>
        <Spinner />
      </View>
    );
  }

  render() {
    return (
      <View>
        {this.renderHeader()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  componentStyle: {
    position: 'relative',
    backgroundColor: 'black',
    overflow: 'hidden'
  },
  closeStyle: {
    position: 'absolute',
    marginTop: 20,
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
    alignItems: 'center',
    // transform: [
    //   { rotateY: '180deg' },
    // ],
  },
  detailsTextContainerStyle: {
    position: 'absolute',
    backgroundColor: 'rgba(25,25,25,0.5)',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    fontSize: 10,
  },
  ratingStyle: {
    flexDirection: 'row'
  },
  reviewNumberText: {
    color: 'white',
    marginLeft: 5,
    fontSize: 10
  }
});

const mapStateToProps = ({ teas }) => {
  return { teas };
};

// <Text
//   style={[styles.headerTextStyle]}
// >
//   {title}
// </Text>

export default connect(mapStateToProps, { goBack })(ViewTeaHeader);
