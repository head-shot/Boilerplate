/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import {Root} from './src/config/layouts';
import {Title, Subtitle} from './src/config/typography';
import {rootWidth, full, rootHeight} from './src/config/constants';
import ListPicker from './src/components/ListPicker';
import GridPicker from './src/components/GridPicker';
import Input from './src/components/Input';

export default class App extends React.Component {
  render() {
    return (
      <>
        <Root></Root>
      </>
    );
  }
}
