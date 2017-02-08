import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {Colors, Button, Badge} from 'react-native-ui-lib'; //eslint-disable-line
import './screens';

Navigation.startSingleScreenApp({
  screen: {
    screen: 'example.MainScreen',
    title: 'Wix UI Lib',
    navigatorButtons: {}
  }
});
