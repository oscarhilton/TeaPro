import React, { Component } from 'react';
import { ListView, StyleSheet } from 'react-native';
import TeaCard from './TeaCard';

class TeaCardList extends Component {
  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(this.props.teaList);
  }

  renderRow(tea) {
    console.log(tea);
    return <TeaCard tea={tea} />;
  }

  render() {
    return (
      <ListView
        horizontal
        dataSource={this.dataSource}
        renderRow={this.renderRow}
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
