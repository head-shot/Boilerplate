/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StatusBar, ScrollView} from 'react-native';
import {darkColor, lightColor} from './theme';
import {darkMode} from '../../settings';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {rootHeight, rootWidth, full} from './constants';

// Most commonly used Layout Containers are located in this file

export const Root = ({style, children}) => {
  return (
    <View
      style={{
        height: rootHeight,
        width: rootWidth,
        alignItems: 'center',
        paddingHorizontal: 0.06 * rootWidth,
        paddingTop: getStatusBarHeight(true),
        backgroundColor: darkColor,
        ...style,
      }}>
      <StatusBar
        backgroundColor={lightColor}
        barStyle={darkMode ? 'light-content' : 'dark-content'}
      />
      {children}
    </View>
  );
};

export const RootScroll = ({style, children}) => {
  return (
    <View
      style={{
        height: rootHeight,
        width: rootWidth,
        backgroundColor: darkColor,
      }}>
      <StatusBar
        backgroundColor={lightColor}
        barStyle={darkMode ? 'light-content' : 'dark-content'}
      />
      <ScrollView
        contentContainerStyle={{
          minHeight: full,
          width: full,
          alignItems: 'center',
          paddingHorizontal: 0.06 * rootWidth,
          paddingTop: getStatusBarHeight(true),
          ...style,
        }}>
        {children}
      </ScrollView>
    </View>
  );
};
