import {CREATE_USER, DELETE_USER} from '../types/user.types'


const INITIAL_STATE = {
	user: '',
	token: ''
};

export const userReducer = (state = INITIAL_STATE, action: any) => {
	switch (action.type) {
		case CREATE_USER:
			console.log(action.payload.user)
			return { ...state, token: action.payload.user, user: action.payload.token };
		case DELETE_USER:
			return { ...state, token: '', user: '' };
		default: return state;
	};
};

export default userReducer