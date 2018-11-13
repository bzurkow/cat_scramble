import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import Home from './Home';
import Levels from './Levels';
import Game from './Game';

const Navigation = createStackNavigator({
  Home: Home,
  Levels: Levels,
  Game: Game
})

export default class App extends React.Component {
  render() {
    return (
      <Navigation />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
