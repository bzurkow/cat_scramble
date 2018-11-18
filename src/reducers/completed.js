/*---------- INITIAL STATE ----------*/
const initialState = [];

/*---------- ACTION TYPES ----------*/
const ADD_COMPLETED = 'ADD_COMPLETED';

/*---------- ACTION CREATORS ----------*/

export const addGame = game => ({
	type: ADD_COMPLETED,
	game
});

/*---------- THUNK CREATORS ----------*/

/*---------- REDUCER ----------*/

export default (state = initialState, action) => {
	const newState = Object.assign([], state);
	switch (action.type) {
		case ADD_COMPLETED:
			newState.push(action.game);
			return newState;
		default: return state;
	}
};