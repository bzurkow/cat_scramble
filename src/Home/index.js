import React, { Component } from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

import HowTo from './howToPlay';

export default class Home extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'CatScramble!',
    headerBackTitle: 'Home',
    headerStyle: {
      backgroundColor: '#FF69B4',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  });

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPress={()=>this.props.navigation.navigate('Levels')}
          style={styles.th}
          >
          <Text style={styles.text}>Play Now!</Text>
        </TouchableHighlight>
        <HowTo />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b0e0e6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 40,
    padding: 20
  },
  th: {
    backgroundColor: '#FF69B4',
    borderRadius: 50
  }
});
