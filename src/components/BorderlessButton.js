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
  // <BorderlessButton
  //   style={{
  // Custom Styling
  // }}
  //   text="Click me"
  //   isLoading={isLoading}
  //   onPress={() => {
  //     if (isLoading) {
  //       // 
  //     } else {
  //       this.setState({isLoading: !isLoading});
  //     }
  //   }}
  // />
}

export const BorderlessButton = props => {
  // The Props received from the Parent component
  const {text, style, onPress, isLoading} = props;
  return (
    <>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.6}
        style={{
          width: rootWidth * 0.15,
          height: rootWidth * 0.075,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 50,
          ...style,
        }}>
        {isLoading ? (
          <LottieView
            style={{width: rootWidth * 0.075}}
            source={require('../assets/images/Indicator.json')}
            autoPlay
            loop
          />
        ) : (
          <Body style={{fontWeight: 'bold', color: primaryColor}}>{text}</Body>
        )}
      </TouchableOpacity>
    </>
  );
};
