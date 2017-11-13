import React, { Component } from 'react';
import { ListView, StyleSheet } from 'react-native';
import TeaCardButton from './TeaCardButton';

class TeaCardList extends Component {
  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(this.props.teaList);
  }

  renderRow(tea) {
    // console.log(tea.title);
    return <TeaCardButton tea={{ ...tea, score: 4.6 }} />;
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
    backgroundColor: 'white'
  }
});

export default TeaCardList;
