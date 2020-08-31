/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-lone-blocks */
/* eslint-disable prettier/prettier */
// Imports for the UserInput Component
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Body} from '../config/typography';
import {rootWidth, full, childFull} from '../config/constants';
import {primaryColor, secondaryColor} from '../config/theme';
import {greyDark, greyLight} from '../config/colors';
import {darkMode} from '../../settings';
import LottieView from 'lottie-react-native';

// USAGE IN PARENT COMPONENTS
{
  // <Button
  //   main
  //   style={{
  // Custom Styling
  // }}
  //   text="Next"
  //   isLoading={isLoading}
  //   onPress={() => {
  //     if (isLoading) {
  //       // this.setState({isLoading: !isLoading});
  //     } else {
  //       this.setState({isLoading: !isLoading});
  //     }
  //   }}
  // />
}

export const Button = props => {
  // The Props received from the Parent component
  const {text, main, style, onPress, isLoading} = props;
  return (
    <>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.6}
        style={{
          width: rootWidth * 0.35,
          height: rootWidth * 0.115,
          alignItems: 'center',
          justifyContent: 'center',
          borderWidth: 1.25,
          borderRadius: 50,
          borderColor: main ? primaryColor : darkMode ? greyLight : greyDark,
          backgroundColor: isLoading
            ? 'transparent'
            : main
            ? secondaryColor
            : darkMode
            ? greyDark
            : greyLight,
          ...style,
        }}>
        {isLoading ? (
          <LottieView
            style={{width: rootWidth * 0.15}}
            source={require('../assets/images/Indicator.json')}
            autoPlay
            loop
          />
        ) : (
          <Body>{text}</Body>
        )}
      </TouchableOpacity>
    </>
  );
};
