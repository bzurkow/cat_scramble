import React from 'react';
import { connect } from 'react-redux';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { Icon } from 'react-native-elements';

import { setGame } from '../reducers/onGame';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

class Levels extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'CatScramble!',
    headerStyle: {
      backgroundColor: '#FF69B4',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  });


  render() {
    let arr = [0, 1, 2, 3, 4, 5];
    let list = arr.map((el, i, self) => (
      <TouchableHighlight
        key={i}
        style={styles.listTH}
        onPress={()=>{
          this.props.setGame(i)
          this.props.navigation.navigate('Game')
        }}
        >
        { i<self.length-1 ?
          <View style={styles.listView}>
{/*            <Image
              style={styles.image} 
              source={require(`../../assets/Cats/cat${0}.jpg`)}
              />
 */}           
            <Text style={styles.text}>Cat {i+1}</Text>
            <Icon 
              type='material-community'
              name='arrow-right'
              />
          </View>
        : <Text style={styles.textSoon}>More Cats Coming Soon!</Text>
        }
      </TouchableHighlight>
    ))
    return (
      <View style={styles.container}>
        {list}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    resizeMode: 'center',
    width: 40,
    height: 60

  },
  container: {
    flex: 1,
    backgroundColor: '#b0e0e6',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  listTH: {
    flex: 2,
    backgroundColor: "#fff",
    padding: 10,
    width: width,
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10
  },
  listView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 20,
    marginRight: 20
  },
  textSoon: {
    fontSize: 20,
    fontStyle: 'italic',
    alignSelf: 'center'
  }
});

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  setGame: game => dispatch(setGame(game))
});

export default connect(mapStateToProps, mapDispatchToProps)(Levels);
