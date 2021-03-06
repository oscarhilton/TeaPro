import React, { Component } from 'react';
import { ListView, StyleSheet } from 'react-native';
import ImageCard from './ImageCard';

class ImageCardList extends Component {
  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(this.props.imageList);
  }

  renderRow(image) {
    return <ImageCard tea={image} />;
  }

  render() {
    return (
      <ListView
        horizontal
        dataSource={this.dataSource}
        renderRow={this.renderRow.bind(this)}
        style={styles.teaListStyle}
        removeClippedSubviews={false}
      />
    );
  }
}

const styles = StyleSheet.create({
  teaListStyle: {
    paddingTop: 5,
    paddingBottom: 10,
    height: 130,
    backgroundColor: '#f1f1f1'
  }
});

export default ImageCardList;
