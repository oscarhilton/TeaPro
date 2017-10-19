import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import TeaCard from '../components/TeaCard';

const ViewTeaHeader = props => {
  return (
    <View style={styles.componentStyle}>
      <View style={styles.detailsStyle}>
        <View style={styles.teaCardContainer}>
          <TeaCard tea={props.tea} />
        </View>
        <Text style={styles.headerTextStyle}>{props.tea.title}</Text>
        <Text style={styles.originTextStyle}>{props.tea.origin.toUpperCase()}</Text>
      </View>
      <Image
        style={styles.imageStyle}
        blurRadius={20}
        source={{ uri: 'https://content.skyscnr.com/673b2682e2f7b1d16d69c055723db749/1__dadcafe.jpg?resize=800px:99999px&quality=75' }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  componentStyle: {
    height: 300,
    position: 'relative'
  },
  detailsStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 1,
    top: 50,
    bottom: 0,
    left: 0,
    right: 0,
    flex: 1
  },
  imageStyle: {
    height: 400,
    zIndex: 0,
    opacity: 0.5
  },
  teaCardContainer: {
    height: 100,
    width: 90
  },
  headerTextStyle: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
    marginTop: 30,
    marginBottom: 10
  },
  originTextStyle: {
    color: 'white',
    letterSpacing: 2,
    fontSize: 12
  }
});

export default ViewTeaHeader;
