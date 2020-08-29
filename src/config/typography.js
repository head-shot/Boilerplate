/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

// Imports
import React from 'react';
import {Text} from 'react-native';
import {darkMode} from '../../settings';
import {
  whiteMedium,
  blackMedium,
  blackLight,
  greyDark,
  whiteLight,
  greyLight,
} from './colors';

// Most commonly used Text Components are located in this file

export const Header = props => {
  return (
    <Text
      style={{
        fontSize: 26,
        color: darkMode ? whiteMedium : blackMedium,
        fontFamily: 'Poppins-SemiBold',
      }}>
      {props.children}
    </Text>
  );
};

export const Title = props => {
  return (
    <Text
      style={{
        fontSize: 22,
        color: darkMode ? whiteLight : blackLight,
        fontFamily: 'Poppins-SemiBold',
      }}>
      {props.children}
    </Text>
  );
};

export const Subtitle = props => {
  return (
    <Text
      style={{
        fontSize: 18,
        color: darkMode ? whiteLight : blackLight,
        fontFamily: 'Poppins-Regular',
      }}>
      {props.children}
    </Text>
  );
};

export const Body = props => {
  return (
    <Text
      style={{
        fontSize: 16,
        color: darkMode ? whiteLight : blackLight,
        fontFamily: 'Poppins-Regular',
      }}>
      {props.children}
    </Text>
  );
};

export const Caption = props => {
  return (
    <Text
      style={{
        fontSize: 14,
        color: darkMode ? whiteLight : blackLight,
        fontFamily: 'Poppins-Light',
      }}>
      {props.children}
    </Text>
  );
};

export const Placeholder = props => {
  return (
    <Text
      style={{
        fontSize: 14,
        color: darkMode ? greyLight : greyDark,
        fontFamily: 'Poppins-Regular',
      }}>
      {props.children}
    </Text>
  );
};
