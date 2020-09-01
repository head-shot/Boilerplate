/* eslint-disable no-lone-blocks */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {TextInput, Keyboard, TouchableOpacity, View} from 'react-native';
import {primaryColor, lightColor} from '../config/theme';
import {full, rootWidth} from '../config/constants';
import {greyDark} from '../config/colors';
import Icon from 'react-native-vector-icons/Ionicons';

{
  // <BorderlessSearchbar
  //   data={[
  //     {
  //       key: 'a',
  //       value: 'Apple',
  //     },
  //     {
  //       key: 'b',
  //       value: 'Banana',
  //     },
  //     {
  //       key: 'c',
  //       value: 'Cucumber',
  //     },
  //   ]}
  //   placeholder="-Search-"
  //   onChangeText={text => {}}
  //   filtered={data => {
  //     console.log('Data ==>', data);
  //   }}
  // />
}

export default class BorderlessSearchbar extends Component {
  state = {
    placeholder: this.props.placeholder ? this.props.placeholder : '-Search-',
    focused: false,
    filtered: this.props.filtered,
    filteredData: [],
    data: this.props.data,
    val: '',
  };

  filterText = text => {
    var newData = this.state.data;
    newData = this.state.data.filter(item => {
      const itemData = item.value.toLowerCase();
      const textData = text.toLowerCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      filteredData: newData,
    });
    this.state.filtered(newData);
  };

  render() {
    const {onChangeText} = this.props;
    const {placeholder, focused, val} = this.state;
    return (
      <>
        <View
          style={{
            height: rootWidth * 0.125,
            width: full,
            borderBottomWidth: 0.75,
            flexDirection: 'row',
            // justifyContent: 'center',
            borderColor: focused ? primaryColor : greyDark,
          }}>
          <View
            style={{
              height: rootWidth * 0.125,
              width: rootWidth * 0.1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Icon
              name="search-outline"
              size={22}
              color={focused ? primaryColor : greyDark}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <TextInput
              placeholder={placeholder}
              defaultValue={val}
              // Callback for any update in the Input of the component
              onChangeText={text => {
                onChangeText(text);
                if (text.length > 0) {
                  this.filterText(text);
                  this.setState({focused: true, val: text});
                } else {
                  this.setState({focused: false});
                }
              }}
              onSubmitEditing={() => Keyboard.dismiss()}
              returnKeyType={'search'}
              blurOnSubmit={false}
              placeholderTextColor={focused ? primaryColor : greyDark}
              textAlignVertical="center"
              style={{
                marginLeft: -1,
                color: primaryColor,
                height: rootWidth * 0.125,
                width: rootWidth * 0.675,
              }}
            />
            <TouchableOpacity
              activeOpacity={1}
              style={{
                marginLeft: -1,
                height: rootWidth * 0.125,
                width: rootWidth * 0.1,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => {
                if (focused) {
                  this.setState({val: '', focused: false});
                }
              }}>
              {focused ? (
                <Icon name="backspace-outline" size={22} color={primaryColor} />
              ) : (
                <View />
              )}
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  }
}
