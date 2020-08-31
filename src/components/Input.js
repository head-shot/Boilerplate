/* eslint-disable no-lone-blocks */
/* eslint-disable prettier/prettier */
// Imports for the UserInput Component
import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Image,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';
import {primaryColor, lightColor} from '../config/theme';
import {rootWidth, full} from '../config/constants';
import {greyDark} from '../config/colors';

{
  /* <Input
  activeImage={require('./src/assets/images/password.png')}
  image={require('./src/assets/images/password.png')}
  keyboardType={'default'}
  password
  placeholder="Password"
  onChangeText={text => {
    console.log(text);
    // this.setState({password: text});
  }}
/>; */
}

export default class Input extends React.Component {
  // Declare state so this component can make updates to the state
  state = {};

  render() {
    // The Props received from the Parent component
    const {
      placeholder,
      image,
      activeImage,
      onChangeText,
      keyboardType,
      password,
    } = this.props;

    // De-Structure the state of the Component
    const {focused} = this.state;

    // Styling Properties
    const {rootView, textInputStyle, imageView} = styles;
    return (
      <>
        {/* Wrapped by KeyboardAvoidingView so that the component does not hide under the Virtual Keyboard */}
        <KeyboardAvoidingView behavior={'position'}>
          {/* Root View */}
          <View style={rootView}>
            {/* The Image container on the Left part of the User Input Component */}
            <View
              style={{
                ...imageView,
                borderColor: focused ? primaryColor : greyDark,
              }}>
              {/* Loading Image from props provided */}
              <Image
                style={{height: rootWidth * 0.05}}
                source={focused ? activeImage : image}
                resizeMethod="resize"
                resizeMode="contain"
              />
            </View>
            {/* The actual TextInput Component on the Right */}
            <TextInput
              placeholder={placeholder} // Placeholder prop from parent Component
              // Callback for any update in the Input of the component
              onChangeText={text => {
                onChangeText(text);
                if (text.length > 0) {
                  this.setState({focused: true});
                } else {
                  this.setState({focused: false});
                }
              }}
              onSubmitEditing={() => Keyboard.dismiss()}
              returnKeyType={'next'}
              blurOnSubmit={false}
              secureTextEntry={password}
              keyboardType={keyboardType}
              placeholderTextColor={focused ? primaryColor : greyDark}
              textAlignVertical="center"
              style={{
                ...textInputStyle,
                borderColor: focused ? primaryColor : greyDark,
              }}
            />
          </View>
        </KeyboardAvoidingView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  rootView: {
    height: rootWidth * 0.125,
    width: full,
    flexDirection: 'row',
  },
  imageView: {
    height: rootWidth * 0.125,
    borderWidth: 0.75,
    borderTopLeftRadius: 75,
    backgroundColor: lightColor,
    borderBottomLeftRadius: 75,
    borderRightWidth: 0,
    width: rootWidth * 0.125,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInputStyle: {
    marginLeft: -1,
    color: primaryColor,
    height: rootWidth * 0.125,
    backgroundColor: lightColor,
    borderLeftWidth: 0,
    borderWidth: 0.75,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    width: rootWidth * 0.725,
  },
});
