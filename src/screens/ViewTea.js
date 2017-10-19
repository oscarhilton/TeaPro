import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Accordion from '../components/Accordion';
import ViewTeaHeader from '../components/ViewTeaHeader';

const ViewTea = ({ navigation }) => {
  const { params } = navigation.state;
  return (
    <ScrollView style={styles.backgroundStyle}>
      <ViewTeaHeader tea={params} />
      <Accordion
        heading={'Steep Time'}
        text={params.steeptime}
      />
      <Accordion
        heading={'Description'}
        text={params.description}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: 'rgba(0,0,0,0.8)',
    flex: 1
  }
});

export default ViewTea;
