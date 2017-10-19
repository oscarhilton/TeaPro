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
    return <TeaCardButton tea={tea} />;
  }

  render() {
    return (
      <ListView
        horizontal
        dataSource={this.dataSource}
        renderRow={this.renderRow.bind(this)}
        style={styles.teaListStyle}
      />
    );
  }
}

const styles = StyleSheet.create({
  teaListStyle: {
    paddingTop: 5,
    paddingBottom: 10,
    backgroundColor: '#cccccc'
  }
});

export default TeaCardList;
