import React from 'react';
import { View, StyleSheet } from 'react-native';
import TeaCard from '../components/TeaCard';

const ViewTeaScene = ({ navigation }) => {
  const { params } = navigation.state;
  return (
    <View style={styles.backgroundStyle}>
      <TeaCard tea={params} />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: 'rgba(0,0,0,0.8)',
    flex: 1
  }
});

export default ViewTeaScene;
