/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, View, StatusBar} from 'react-native';

import {lightColor, darkColor} from './src/config/theme';
import {
  Header,
  Title,
  Body,
  Subtitle,
  Caption,
  Placeholder,
} from './src/config/typography';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor={darkColor} />
      <SafeAreaView>
        <View
          style={{
            height: '100%',
            paddingVertical: '40%',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            backgroundColor: lightColor,
          }}>
          <Header>Heading Text</Header>
          <Title>Title Text</Title>
          <Subtitle>Subtitle Text</Subtitle>
          <Body>Simple Text</Body>
          <Caption>Caption text</Caption>
          <Placeholder>Placeholder Text</Placeholder>
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
