import React, { Component } from 'react';
import {
  ScrollView
} from 'react-native';
import { SectionHeader } from './common';
import TeaCardList from './TeaCardList';
import HeroTea from './HeroTea';

class DiscoverScene extends Component {
  render() {
    return (
      <ScrollView>
        <HeroTea />
        <SectionHeader heading="Because you added Assam to your cupboard" />
        <TeaCardList />
        <SectionHeader heading="Because you added Assam to your cupboard" />
        <TeaCardList />
        <SectionHeader heading="Because you added Assam to your cupboard" />
        <TeaCardList />
        <HeroTea />
        <SectionHeader heading="Because you added Assam to your cupboard" />
        <TeaCardList />
        <SectionHeader heading="Because you added Assam to your cupboard" />
        <TeaCardList />
        <SectionHeader heading="Because you added Assam to your cupboard" />
        <TeaCardList />
      </ScrollView>
    );
  }
}

export default DiscoverScene;
