/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {Root} from './src/config/layouts';
import {TypographyShowcase} from './src/config/typography';

const App = () => {
  return (
    <>
      <Root>
        <View style={{height: '33%', backgroundColor: 'green'}}></View>
        <View></View>
        <View></View>
      </Root>
      {/* <TypographyShowcase /> */}
    </>
  );
};

export default App;
