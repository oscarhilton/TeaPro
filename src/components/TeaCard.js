import React from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

const TeaCard = (props) => {
  const { title, category, score } = props.tea;
  return (
    <View style={[styles.teaCardStyle, { backgroundColor: category.background }, props.addStyle]}>
      <Text style={styles.titleStyle}>
        { title }
      </Text>
      <Text style={styles.scoreStlye}>
        { score }
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  teaCardStyle: {
    width: 90,
    height: 100,
    padding: 8,
    margin: 1,
    borderRadius: 8,
    flex: 1,
    position: 'relative'
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
