/* eslint-disable no-lone-blocks */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import DatePicker, {getToday} from 'react-native-modern-datepicker';
import {lightColor, primaryColor, darkColor} from '../config/theme';
import {greyDark} from '../config/colors';
import {rootWidth, rootHeight} from '../config/constants';
import RBSheet from 'react-native-raw-bottom-sheet';
import {Heading, Caption} from '../config/typography';

{
  /* <DatePicker
  interval={10}
  onDateChange={date => {
    console.log(date);
  }}
/> */
}

export default class TimePicker extends React.Component {
  state = {
    interval: this.props.interval ? this.props.interval : 5,
    onDateChange: this.props.onDateChange,
    selectedDate: '2020/09/03',
  };

  render() {
    const {onDateChange, interval} = this.state;
    return (
      <>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => {
            this.RBSheet.open();
          }}
          style={{
            height: rootWidth * 0.15,
            width: rootWidth * 0.5,
            borderRadius: 15,
            borderWidth: 0.5,
            borderColor: primaryColor,
            backgroundColor: lightColor,
          }}>
          <View
            style={{
              height: '65%',
              width: rootWidth * 0.5,
              paddingHorizontal: rootWidth * 0.02,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Heading style={{color: primaryColor}}>
              {this.state.selectedDate}
            </Heading>
          </View>
          <View
            style={{
              height: '20%',
              width: rootWidth * 0.5,
              paddingLeft: rootWidth * 0.05,
              paddingRight: rootWidth * 0.025,
              justifyContent: 'space-evenly',
              alignItems: 'flex-start',
              flexDirection: 'row',
            }}>
            <Caption style={{fontSize: 10}}>YYYY</Caption>
            <Caption style={{fontSize: 10}} />
            <Caption style={{fontSize: 10}}>MM</Caption>
            <Caption style={{fontSize: 10}} />
            <Caption style={{fontSize: 10}}>DD</Caption>
          </View>
        </TouchableOpacity>
        <RBSheet
          ref={ref => {
            this.RBSheet = ref;
          }}
          animationType={'fade'}
          height={rootHeight * 0.65}
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
              justifyContent: 'center',
              backgroundColor: lightColor,
            },
            draggableIcon: {
              backgroundColor: primaryColor,
            },
          }}>
          <DatePicker
            options={{
              backgroundColor: lightColor,
              selectedTextColor: lightColor,
              textHeaderColor: primaryColor,
              mainColor: primaryColor,
              textDefaultColor: greyDark,
              borderColor: greyDark,
            }}
            style={{
              width: rootWidth,
            }}
            current={getToday()}
            selected={getToday()}
            mode="datepicker"
            minuteInterval={interval}
            onDateChange={selectedDate => {
              // Pass to parent
              onDateChange(selectedDate);
              this.setState({
                selectedDate: selectedDate,
              });
              this.RBSheet.close();
            }}
          />
        </RBSheet>
      </>
    );
  }
}
