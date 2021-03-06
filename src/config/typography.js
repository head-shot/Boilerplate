/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

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
import {Root} from './layouts';

// Most commonly used Text Components are located in this file

export const Heading = props => {
  return (
    <Text
      {...props}
      style={{
        fontSize: 26,
        color: darkMode ? whiteMedium : blackMedium,
        fontFamily: 'Poppins-SemiBold',
        ...props.style,
      }}>
      {props.children}
    </Text>
  );
};

export const Title = props => {
  return (
    <Text
      {...props}
      style={{
        fontSize: 22,
        color: darkMode ? whiteLight : blackLight,
        fontFamily: 'Poppins-SemiBold',
        ...props.style,
      }}>
      {props.children}
    </Text>
  );
};

export const Subtitle = props => {
  return (
    <Text
      {...props}
      style={{
        fontSize: 18,
        color: darkMode ? whiteLight : blackLight,
        fontFamily: 'Poppins-Regular',
        ...props.style,
      }}>
      {props.children}
    </Text>
  );
};

export const Body = props => {
  return (
    <Text
      {...props}
      style={{
        fontSize: 16,
        color: darkMode ? whiteLight : blackLight,
        fontFamily: 'Poppins-Regular',
        ...props.style,
      }}>
      {props.children}
    </Text>
  );
};

export const Caption = props => {
  return (
    <Text
      {...props}
      style={{
        fontSize: 14,
        color: darkMode ? whiteLight : blackLight,
        fontFamily: 'Poppins-Light',
        ...props.style,
      }}>
      {props.children}
    </Text>
  );
};

export const Placeholder = props => {
  return (
    <Text
      {...props}
      style={{
        fontSize: 14,
        color: darkMode ? greyLight : greyDark,
        fontFamily: 'Poppins-Regular',
        ...props.style,
      }}>
      {props.children}
    </Text>
  );
};

export const TypographyShowcase = () => {
  return (
    <Root
      style={{
        paddingTop: '30%',
        paddingBottom: '30%',
        justifyContent: 'space-evenly',
      }}>
      <Heading>Typography</Heading>
      <Heading>Heading Text</Heading>
      <Title>Title Text</Title>
      <Subtitle>Subtitle Text</Subtitle>
      <Body>Simple Text</Body>
      <Caption>Caption text</Caption>
      <Placeholder>Placeholder Text</Placeholder>
    </Root>
  );
};
