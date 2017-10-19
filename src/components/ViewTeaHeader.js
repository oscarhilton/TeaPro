import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TeaCard from '../components/TeaCard';

const ViewTeaHeader = props => {
  return (
    <View style={styles.componentStyle}>
      <View style={styles.teaCardContainer}>
        <TeaCard tea={props.tea} />
      </View>
      <Text style={styles.headerTextStyle}>{props.tea.title}</Text>
      <Text style={styles.originTextStyle}>{props.tea.origin.toUpperCase()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  componentStyle: {
    height: 300,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  teaCardContainer: {
    height: 100,
    width: 90
  },
  headerTextStyle: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
    marginTop: 50,
    marginBottom: 10
  },
  originTextStyle: {
    color: 'white',
    letterSpacing: 3
  }
});

export default ViewTeaHeader;
