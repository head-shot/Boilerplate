import AsyncStorage from '@react-native-community/async-storage';
import {Component} from 'react';

const loginCred = 'LOGIN_CREDENTIALS';

export default class Preferences extends Component {
  // ****** SAMPLE Saving to Async Storage ******
  async saveLogin(data) {
    try {
      // We want to wait for the Promise returned by AsyncStorage.setItem()
      // To be resolved to the actual value before returning the value

      await AsyncStorage.setItem(loginCred, JSON.stringify(data));

      console.log('Save Successful!');
    } catch (error) {
      console.log('Error: ', error.message);
    }
  }

  // ****** SAMPLE Get from Async Storage ******
  async getLogin() {
    try {
      const data = await AsyncStorage.getItem(loginCred);
      return JSON.parse(data);
    } catch (error) {
      console.log('Error: ' + error);
      return null;
    }
  }
}
