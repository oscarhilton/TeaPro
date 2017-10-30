import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TextArea, Button } from '../components/common';

const WriteReview = (props) => {
  const tea = props.navigation.state.params;
  console.log(tea);

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <Text>Review {tea.title}</Text>
      <View style={styles.inputFieldStyle}>
        <TextArea
          placeholder={'Hello'}
          numberOfLines={6}
          label="Write your review"
        />
        <View style={{ height: 45 }}>
          <Button>
            Publish review
          </Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputFieldStyle: {
    backgroundColor: '#f1f1f1',
    height: 300
  }
});

export default WriteReview;
