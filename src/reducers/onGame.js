/*---------- INITIAL STATE ----------*/
const initialState = null;

/*---------- ACTION TYPES ----------*/
const SET_GAME = 'SET_GAME';
const RESET_GAME = 'RESET_GAME';

/*---------- ACTION CREATORS ----------*/

export const setGame = game => ({
	type: SET_GAME,
	game
});

export const resetGame = () => ({
	type: RESET_GAME
});

/*---------- THUNK CREATORS ----------*/

/*---------- REDUCER ----------*/

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_GAME:
			return action.game
		case RESET_GAME:
			return initialState;
		default: return state;
	}
};