/* eslint-disable no-lone-blocks */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import DatePicker from 'react-native-modern-datepicker';
import {lightColor, primaryColor, darkColor} from '../config/theme';
import {greyDark} from '../config/colors';
import {rootWidth, rootHeight} from '../config/constants';
import RBSheet from 'react-native-raw-bottom-sheet';
import {Heading, Caption} from '../config/typography';

{
  /* <TimePicker
  interval={10}
  onTimeChange={time => {
    console.log(time);
  }}
/> */
}

export default class TimePicker extends React.Component {
  state = {
    interval: this.props.interval ? this.props.interval : 5,
    onTimeChange: this.props.onTimeChange,
    selectedTime: '00:00',
  };

  render() {
    const {onTimeChange, interval} = this.state;
    return (
      <>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => {
            this.RBSheet.open();
          }}
          style={{
            height: rootWidth * 0.15,
            width: rootWidth * 0.4,
            borderRadius: 15,
            borderWidth: 0.5,
            borderColor: primaryColor,
            backgroundColor: lightColor,
          }}>
          <View
            style={{
              height: '65%',
              width: rootWidth * 0.4,
              paddingHorizontal: rootWidth * 0.02,
              justifyContent: 'space-evenly',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Heading style={{color: primaryColor}}>
              {this.state.selectedTime.substr(0, 2)}
            </Heading>
            <Heading style={{color: primaryColor}}>
              {this.state.selectedTime.substr(2, 1)}
            </Heading>
            <Heading style={{color: primaryColor}}>
              {this.state.selectedTime.substr(3, 2)}
            </Heading>
          </View>
          <View
            style={{
              height: '20%',
              width: rootWidth * 0.4,
              paddingHorizontal: rootWidth * 0.02,
              justifyContent: 'space-evenly',
              alignItems: 'flex-start',
              flexDirection: 'row',
            }}>
            <Caption style={{fontSize: 10}}>Hr</Caption>
            <Caption style={{fontSize: 10}} />
            <Caption style={{fontSize: 10}}>Min</Caption>
          </View>
        </TouchableOpacity>
        <RBSheet
          ref={ref => {
            this.RBSheet = ref;
          }}
          animationType={'fade'}
          height={rootHeight * 0.4}
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
              textDefaultColor: greyDark,
              selectedTextColor: lightColor,
              mainColor: primaryColor,
              borderColor: greyDark,
            }}
            style={{
              width: rootWidth * 0.6,
            }}
            mode="time"
            minuteInterval={interval}
            onTimeChange={selectedTime => {
              // Pass to parent
              onTimeChange(selectedTime);
              this.setState({selectedTime: selectedTime});
              this.RBSheet.close();
            }}
          />
        </RBSheet>
      </>
    );
  }
}
