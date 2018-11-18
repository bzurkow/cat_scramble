import React, { Component } from 'react';
import { Dimensions, Image, Modal, ScrollView, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { Divider } from 'react-native-elements';
import Pics from '../../assets/HowTo';

export default class HowTo extends Component {
	constructor(props){
		super(props)
		this.state = {
			open: false
		};

		this.open = this.open.bind(this);
		this.close =  this.close.bind(this);
	};

	open() {
		this.setState({open: true})
	};

	close() {
		this.setState({open: false})
	};

	render(){
		return(
			<View>
				<TouchableHighlight
					onPress={this.open}
					style={styles.th}
					>
					<Text style={styles.btnText}>How To Play</Text>
				</TouchableHighlight>
				<Modal 
					visible={this.state.open}
					transparent={true}
					style={styles.modal}
					>
					<View style={styles.sView}>
					<ScrollView contentContainerStyle={styles.scrollView}>
						<Text style={styles.close} onPress={this.close}>Close</Text>
						<Text style={styles.titleText}>How to play!</Text>
						<Text style={styles.bodyText}>The goal of the game is to unscramble the cat picture. Each cat picture is broken up into square tiles with one pink square.</Text>
						<Image 
							source={Pics.scrambled}
							style={styles.image}
							/>
						<Text style={styles.bodyText}>In each puzzle, the pink square belongs in the bottom right hand corner.</Text>
						<Image 
							source={Pics.complete}
							style={styles.image}
							/>
						<Text style={styles.bodyText}>Move squares around by swapping them with the pink square. To swap any square on the board, all you have to do is touch it! </Text>
						<Image 
							source={Pics.toSwap}
							style={styles.image}
							/>
						<Image 
							source={Pics.swapped}
							style={styles.image}
							/>
						<Text style={styles.bodyText}>That's all there is to it! Have fun unscrambling all of the cats!</Text>
						<TouchableHighlight style={styles.th} onPress={this.close}>
							<Text style={styles.btnText}>
								Play Now!
							</Text>
						</TouchableHighlight>
					</ScrollView>
						</View>
				</Modal>
			</View>
			)
	};
};

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
	th: {
		backgroundColor: '#FF69B4',
		borderRadius: 50,
		marginTop: 20
	},
	btnText: {
		padding: 15,
		fontSize: 25
	},
	modal: {
		justifyContent: 'center',
		alignItems: 'center'
	},
	scrollView: {
		alignItems: 'center',
		justifyContent: 'flex-start',
		borderRadius: 15,
		height: height*3
	},
	sView: {
		width: width-70,
		height: height-70,
		backgroundColor: '#fff',
		margin: 35,
	},
	titleText: {
		fontSize: 40,
		marginTop: 10,
		marginBottom: 10
	},
	close: {
		position: 'absolute',
		top: 0,
		right: 10,
		textDecorationLine: 'underline'
	},
	headerText: {
		fontSize: 30
	},
	bodyText: {
		margin: 10
	},
	image: {
		width: width/2,
		maxHeight: width/2*1.78,
		resizeMode: 'contain',
		margin: 5
	}
});
