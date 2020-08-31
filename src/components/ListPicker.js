/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable no-lone-blocks */
import React, {Component} from 'react';
import {
  Image,
  View,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import {primaryColor, lightColor, darkColor} from '../config/theme';
import {full, rootWidth, rootHeight} from '../config/constants';
import {greyDark, whiteLight, blackLight} from '../config/colors';
import {Placeholder, Caption} from '../config/typography';
import {darkMode} from '../../settings';

// USAGE IN PARENT COMPONENTS
{
  // <ListPicker
  //   activeImage={require('./src/assets/images/password.png')}
  //   image={require('./src/assets/images/password.png')}
  //   placeholder="-Select-"
  //   style={{
    //  Add custom styles to the project
  // }}
  //   data={[
  // {title: 1},
  // {title: 2},
  // {title: 3},
  // ]}
  //   onClick={op => {
  //     console.log(op);
  //   }}
  // />
}

export default class ListPicker extends Component {
  state = {
    value: this.props.placeholder ? this.props.placeholder : '-Select-',
    focused: false,
  };

  renderRow(item) {
    return (
      <TouchableOpacity
        onPress={() => {
          // Sending Data to the Parent
          this.props.onClick(item);
          this.setState({focused: true, value: item.title});
          this.RBSheet.close();
        }}
        style={{
          margin: '1%',
          marginTop: 0,
          height: rootWidth * 0.12,
          width: 0.85 * rootWidth,
          alignItems: 'flex-start',
          justifyContent: 'flex-end',
          borderColor: darkMode ? whiteLight : blackLight,
          borderBottomWidth: 0.5,
          borderRadius: 10,
          paddingLeft: '5%',
          paddingBottom: '2%',
          ...this.props.style,
        }}>
        <Caption>{item.title}</Caption>
      </TouchableOpacity>
    );
  }

  render() {
    const {data, image, activeImage} = this.props;
    return (
      <>
        <View
          style={{
            height: rootWidth * 0.125,
            width: full,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <View
            style={{
              height: rootWidth * 0.125,
              borderColor: this.state.focused ? primaryColor : greyDark,
              borderWidth: 0.75,
              borderTopLeftRadius: 50,
              backgroundColor: lightColor,
              borderBottomLeftRadius: 50,
              borderRightWidth: 0,
              width: rootWidth * 0.125,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={{height: rootWidth * 0.05}}
              source={this.state.focused ? activeImage : image}
              resizeMethod="resize"
              resizeMode="contain"
            />
          </View>
          <TouchableOpacity
            style={{
              marginLeft: -1,
              height: rootWidth * 0.125,
              borderTopRightRadius: 50,
              borderBottomRightRadius: 50,
              borderLeftWidth: 0,
              width: rootWidth * 0.725,
              flexDirection: 'row',
              backgroundColor: lightColor,
              borderColor: this.state.focused ? primaryColor : greyDark,
              borderWidth: 0.75,
              justifyContent: 'space-between',
              paddingRight: rootWidth * 0.05,
              alignItems: 'center',
            }}
            onPress={() => this.RBSheet.open()}>
            <Caption
              style={{
                color: this.state.focused ? primaryColor : greyDark,
              }}>
              {this.state.value}
            </Caption>
            <Placeholder
              style={{
                fontSize: 10,
                color: this.state.focused ? primaryColor : greyDark,
              }}>
              ▼
            </Placeholder>
          </TouchableOpacity>
        </View>
        <RBSheet
          ref={ref => {
            this.RBSheet = ref;
          }}
          animationType={'fade'}
          closeOnDragDown
          height={rootHeight * 0.5}
          openDuration={250}
          customStyles={{
            wrapper: {
              backgroundColor: darkColor,
            },
            container: {
              borderWidth: 0.75,
              borderBottomWidth: 0,
              borderColor: greyDark,
              borderTopLeftRadius: 25,
              borderTopRightRadius: 25,
              alignItems: 'center',
              backgroundColor: lightColor,
            },
            draggableIcon: {
              backgroundColor: primaryColor,
            },
          }}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              width: full,
              alignItems: 'center',
              marginTop: '2%',
            }}>
            <FlatList
              data={data}
              renderItem={({item}) => this.renderRow(item)}
              keyExtractor={item => item.index}
            />
          </ScrollView>
        </RBSheet>
      </>
    );
  }
}
