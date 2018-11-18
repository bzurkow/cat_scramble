import React from 'react';
import { connect } from 'react-redux';
import { ActivityIndicator, Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Cats from '../../assets/Cats';
import Check from './check';

import { addGame } from '../reducers/completed';

const shuffle = a => {
  for(let i = a.length-1; i>0; i--) {
    const j = Math.floor(Math.random()*(i+1));
    [a[i], a[j]] = [a[j], a[i]];
  };
  return a;
};

class Game extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      correct: null,
      nullIndex: null,
      complete: false,
      cat: null,
      currentCat: null
    };

    this.onPress = this.onPress.bind(this);
    // this.onRefresh = this.onRefresh.bind(this);
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
      this.props.addCompleted(this.props.onGame)
    };

    this.setState({
      currentCat: newCurrent,
      nullIndex: currentIndex
    })
  }

  componentDidMount(){
    const length = Cats[`cat${this.props.onGame}`].length
    let mod = length === 24 ? 4 : length===6 ? 2 : length===54 ? 6 : 8
    let cat = Cats[`cat${this.props.onGame}`].map((el, i, arr) => {
      return i<arr.length-1 ? (
      <TouchableOpacity
        key={i}
        onPress={()=>this.onPress(i)}
        >
        <Image 
          source={el}
          style={{
            height: w/mod,
            width: w/mod
          }}
          />
      </TouchableOpacity>
    ) : (
      <View
        key={i}
        style={{
          height: w/mod,
          width: w/mod,
          backgroundColor: '#FF69B4'
        }}
        >
      </View>
    )});

    let correctArr = Array(cat.length).fill(0).map((el, i)=>i)

    this.setState({cat: cat, correct: correctArr})
    let cat2 = Object.assign([], cat)
    let shuffledCat = shuffle(cat2)

    this.setState({currentCat: shuffledCat})
    let nullIndex = shuffledCat.indexOf(cat[cat.length-1]);
    this.setState({nullIndex: nullIndex})    
  };

  // onRefresh() {
    // not sure if this works yet -- need to modify to get it into the title.. todo for another build! 
    
  //   console.log('hit')
  //   let newCurrent = shuffle(this.state.currentCat)
  //   let newNullIndex = newCurrent.indexOf(this.state.cat[this.state.cat.length-1])
  //   this.setState({
  //     nullIndex: newNullIndex,
  //     currentIndex: newCurrent,
  //     complete: false
  //   })
  // };

  static navigationOptions = ({ navigation }) => ({
    title: 'CatScramble!',
    headerStyle: {
      backgroundColor: '#FF69B4',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    }
  });
  
  render() {
    return (
      <View style={styles.container}>
      { !this.state.currentCat ? <ActivityIndicator color="#000" size='large' /> :
        <View style={!this.state.complete ? styles.gameView : styles.gameComplete}>
          {this.state.complete ? <Check /> : null }
          {this.state.currentCat}
        </View> }
      </View>
    );
  }
}

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

let w = width < 1000 ? 360 : width*.8
let h = width < 1000 ? 540 : width*1.2

let iW = w/4


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b0e0e6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gameView: {
    width: w,
    height: h,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  gameComplete: {
    width: w+4,
    height: h+4,
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderWidth: 2,
    borderColor: '#00ff00'
  },
  image: {
    height: iW,
    width: iW
  },
  null: {
    height: iW,
    width: iW,
    backgroundColor: '#A9A9A9'
  },
  headerRightIcon: {
    marginRight: 5,
    zIndex: 100
  }
});

const mapStateToProps = state => ({
  onGame: state.onGame,
});

const mapDispatchToProps = dispatch => ({
  addCompleted: game => dispatch(addGame(game))
});

export default connect(mapStateToProps, mapDispatchToProps)(Game)