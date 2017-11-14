import React from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

const TeaCard = (props) => {
  const { title, category, score, reviews } = props.tea;
  const average = score / reviews.length;
  const roundedScore = isNaN(average) ? '' : Math.round(average * 10) / 10;
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
    shadowOpacity: 0.1,
    shadowOffset: { height: 1, width: 1 },
    shadowColor: 'black'
  },
  textBackgroundStyle: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    height: '70%',
    shadowOpacity: 0.3,
    shadowOffset: { height: 1 },
    shadowColor: 'black',
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
  }
});

export default TeaCard;
