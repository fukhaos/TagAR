/* eslint-disable react/no-multi-comp */
import React from 'react';
import { Text, View } from 'react-native';
import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer
} from 'react-navigation';
import ARScreen from './EntryARScene';
import HomeScreen from './Home';
import DrawScreen from './Draw';
import NearByTagsScreen from './NearByTags';

const HomeNavigator = createStackNavigator({
  Home: HomeScreen
})

const DrawNavigator = createStackNavigator({
  Draw: DrawScreen
})

const ARNavigator = createStackNavigator({
  NearByTags: NearByTagsScreen,
  EntryARScene: ARScreen
});

const TabNavigator = createBottomTabNavigator({
  Home: HomeNavigator,
  NearByTags: ARNavigator,
  Draw: DrawNavigator
});

export default createAppContainer(TabNavigator);
