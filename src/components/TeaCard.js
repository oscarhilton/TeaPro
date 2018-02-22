import React from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

const TeaCard = (props) => {
  const { title, category, score, reviews, flavoured } = props.tea;
  const average = score / reviews.length;
  const roundedScore = isNaN(average) ? '' : Math.round(average * 10) / 10;
  const isFlavoured = flavoured
        ? (<View style={styles.flavouredStyle}></View>)
        : null;
  return (
    <View style={[styles.teaCardStyle, { backgroundColor: category.background }, props.addStyle]}>
      <View style={styles.textBackgroundStyle}>
        <Text style={styles.titleStyle}>
          { title }
        </Text>
      </View>
      <Text style={styles.scoreStlye}>
        {roundedScore}
      </Text>
      {isFlavoured}
    </View>
  );
};

const styles = StyleSheet.create({
  teaCardStyle: {
    width: 90,
    margin: 1,
    borderRadius: 8,
    flex: 1,
    position: 'relative',
    // shadowOpacity: 0.1,
    // shadowOffset: { height: 1, width: 1 },
    // shadowColor: 'black'
  },
  textBackgroundStyle: {
    backgroundColor: 'rgba(255,255,255,0.01)',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    height: '70%',
    // shadowOpacity: 0.3,
    // shadowOffset: { height: 1 },
    // shadowColor: 'black',
    padding: 8
  },
  titleStyle: {
    fontSize: 12,
    fontWeight: '300',
    color: 'white'
  },
  scoreStlye: {
    fontSize: 10,
    color: 'white',
    textAlign: 'right',
    position: 'absolute',
    bottom: 8,
    right: 8,
  },
  flavouredStyle: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 8,
    backgroundColor: 'yellow'
  }
});

export default TeaCard;
