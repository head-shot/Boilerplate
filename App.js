/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import {Root} from './src/config/layouts';
import {BorderlessButton} from './src/components/BorderlessButton';

export default class App extends React.Component {
  state = {
    isLoading: false,
  };
  render() {
    const {isLoading} = this.state;
    return (
      <>
        <Root>
          <BorderlessButton
            // main
            style={
              {
                // Custom Styling
              }
            }
            text="Next"
            isLoading={isLoading}
            onPress={() => {
              if (isLoading) {
                // this.setState({isLoading: !isLoading});
              } else {
                this.setState({isLoading: !isLoading});
              }
            }}
          />
        </Root>
      </>
    );
  }
}
