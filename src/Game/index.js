import React from 'react';
import { connect } from 'react-redux';
import { ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Cats from '../../assets/Cats';

const shuffle = a => {
  for(let i = a.length-1; i>0; i--) {
    const j = Math.floor(Math.random()*(i+1));
    [a[i], a[j]] = [a[j], a[i]];
  };
  return a;
};

// function shuffle(a) {
//     for (let i = a.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [a[i], a[j]] = [a[j], a[i]];
//     }
//     return a;
// }

class Game extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      correct: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
      actual: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
      nullIndex: null,
      complete: false,
      cat: null,
      currentCat: null
    };

    this.onPress = this.onPress.bind(this);
  };

  onPress(i){
    let currentIndex;
    let nullIndex = this.state.nullIndex
    let newCurrent = Object.assign([], this.state.currentCat);
    this.state.currentCat.forEach((e, index) => {
      if(Number(i)===Number(e.key)){
        currentIndex=index
      }
    });
    [newCurrent[currentIndex],newCurrent[nullIndex]] = [newCurrent[nullIndex],newCurrent[currentIndex]]
    
    if(this.state.cat.every((el, index) => el===newCurrent[index])){
      this.setState({complete: true})
    };

    this.setState({
      currentCat: newCurrent,
      nullIndex: currentIndex
    })
  }

  componentDidMount(){
    let cat = Cats[`cat${this.props.onGame}`].map((el, i, arr) => {
      return i<arr.length-1 ? (
      <TouchableOpacity
        key={i}
        onPress={()=>this.onPress(i)}
        >
        <Image 
          source={el}
          style={styles.image}
          />
      </TouchableOpacity>
    ) : (
      <View
        key={i}
        style={styles.null}
        >
      </View>
    )});

    this.setState({cat: cat})
    let cat2 = Object.assign([], cat)
    let shuffledCat = shuffle(cat2)

    this.setState({currentCat: shuffledCat})
    let nullIndex = shuffledCat.indexOf(cat[23]);
    // console.log(nullIndex)
    this.setState({nullIndex: nullIndex})
    
  }

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
    return (
      <View style={styles.container}>
      { !this.state.currentCat ? <ActivityIndicator color="#000" size='large' /> :
        <View style={!this.state.complete ? styles.gameView : styles.gameComplete}>
          {this.state.currentCat}
        </View> }
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
  gameView: {
    width: 360,
    height: 540,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  gameComplete: {
    width: 364,
    height: 544,
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderWidth: 2,
    borderColor: '#00ff00'
  },
  image: {
    height: 90,
    width: 90
  },
  null: {
    height: 90,
    width: 90,
    backgroundColor: '#fff'
  }
});

const mapStateToProps = state => ({
  onGame: state.onGame
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Game)