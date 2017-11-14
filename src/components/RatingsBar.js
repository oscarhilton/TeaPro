import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import StarRating from 'react-native-star-rating';
import CircleAvitar from './CircleAvitar';

class RatingsBar extends Component {
  render() {
    return (
      <View style={styles.containerStyle} >
        <View style={styles.reviewsStyle} >
          <CircleAvitar width={30} addStyle={styles.circleStyle} />
          <CircleAvitar width={30} addStyle={styles.circleStyle} />
          <CircleAvitar width={30} addStyle={styles.circleStyle} />
          <Text>48 Reviews</Text>
        </View>
        <View style={{ justifyContent: 'center' }}>
          <StarRating
            disabled={true}
            starSize={15}
            starColor={'#212121'}
            maxStars={5}
            rating={this.props.rating}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    padding: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: '#eeeeee',
    borderBottomWidth: 1
  },
  reviewsStyle: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  circleStyle: {
    marginRight: -8
  }
});

export default RatingsBar;
