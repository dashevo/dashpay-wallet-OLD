/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import * as React from 'react';
import { SafeAreaView } from 'react-native';
import { Text } from 'react-native';
import { Avatar } from 'components';
import {
  TabbedCard,
  NavBar
} from 'components';

import connect from "react-redux/es/connect/connect";
import styles from './styles';
import selector from "./selectors";
import actions from "./actions";

import type { ReactElement } from './types';
import type { Props } from './types';
// import type { State } from './types';

const ContactScreen = ({ navigation }: Props): ReactElement =>
  <SafeAreaView style={styles.container}>
    <NavBar navigation={navigation} isOpen={true} />
    <TabbedCard
      disappearingHeaderHeight={150}
      disappearingHeaderPart={
        <Avatar source={require('assets/images/avatar-default.png')} />
      }
      persistentHeaderPart={
        <Text style={{color:'white'}}>Tabbed-Card demo</Text>
      }
      persistentHeaderHeight={100}
    >
      <Text tabLabel='Pay' style={{padding:10}}>{Array.from({length: 1000},()=>Math.random().toString(36).substr(2+Math.pow(Math.random(),.2)*8).replace(/\d/g,m=>'aeiou'.charAt(Math.random()*5))+(Math.random()>0.2?' ':'. ')).join('').replace(/.+?[\.\?\!](\s|$)/g,(t)=>t.charAt(0).toUpperCase()+t.substr(1).toLowerCase())}</Text>
      <Text tabLabel='Request' style={{padding:10}}>{Array.from({length: 1000},()=>Math.random().toString(36).substr(2+Math.pow(Math.random(),.2)*8).replace(/\d/g,m=>'aeiou'.charAt(Math.random()*5))+(Math.random()>0.2?' ':'. ')).join('').replace(/.+?[\.\?\!](\s|$)/g,(t)=>t.charAt(0).toUpperCase()+t.substr(1).toLowerCase())}</Text>
      <Text tabLabel='Activity' style={{padding:10}}>{Array.from({length: 1000},()=>Math.random().toString(36).substr(2+Math.pow(Math.random(),.2)*8).replace(/\d/g,m=>'aeiou'.charAt(Math.random()*5))+(Math.random()>0.2?' ':'. ')).join('').replace(/.+?[\.\?\!](\s|$)/g,(t)=>t.charAt(0).toUpperCase()+t.substr(1).toLowerCase())}</Text>
    </TabbedCard>
  </SafeAreaView>

const connectedContactScreen = connect(
  selector,
  actions
)(ContactScreen);

export default connectedContactScreen;
