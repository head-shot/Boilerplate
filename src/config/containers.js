/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StatusBar} from 'react-native';
import {lightColor, darkColor} from './theme';
import {darkMode} from '../../settings';
import {getStatusBarHeight} from 'react-native-status-bar-height';

// Most commonly used Text Components are located in this file

export const Root = ({style, children}) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        paddingTop: getStatusBarHeight(true),
        backgroundColor: lightColor,
        ...style,
      }}>
      <StatusBar
        backgroundColor={darkColor}
        barStyle={darkMode ? 'light-content' : 'dark-content'}
      />
      {children}
    </View>
  );
};
