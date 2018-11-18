import React from 'react';
import { Icon } from 'react-native-elements';

const Check  = () => 

<Icon 
	name="check"
	type="font-awesome"
	color="#00ff00"
	size={200}
	containerStyle={{
		position: 'absolute',
		zIndex: 1000,
		alignSelf: 'center',
		width: '100%'
	}}
	/>

export default Check