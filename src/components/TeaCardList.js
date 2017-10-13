import React, { Component } from 'react';
import { ListView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import TeaCard from './TeaCard';

class TeaCardList extends Component {
  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(this.props.teaList);
  }

  renderRow(tea) {
    return <TeaCard tea={tea} color={tea.color} />;
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
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: '#cccccc'
  }
});

const mapStateToProps = state => {
  return {
    teaList: state.teaList
  };
};

export default connect(mapStateToProps)(TeaCardList);
