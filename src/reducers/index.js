import { combineReducers } from 'redux';

import onGame from './onGame';
import currentGame from './currentGame';
import completed from './completed';

export default combineReducers({
	onGame,
	currentGame,
	completed
});