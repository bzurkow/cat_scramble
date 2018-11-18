/*---------- INITIAL STATE ----------*/
const initialState = [];

/*---------- ACTION TYPES ----------*/
const SET_CURRENT = 'SET_CURRENT';

/*---------- ACTION CREATORS ----------*/

export const setCurrent = game => ({
	type: SET_CURRENT,
	game
});

/*---------- THUNK CREATORS ----------*/

/*---------- REDUCER ----------*/

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_CURRENT:
			return action.game
		default: return state;
	}
};