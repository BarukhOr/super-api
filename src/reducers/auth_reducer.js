import {AUTH_USER, DEAUTH_USER, AUTH_ERROR} from '../actions/types';

export default function(state={}, action){

	switch(action.type){
		case AUTH_USER:
			return {...state, authenticated: true};
			
		case DEAUTH_USER:
			return {...state, authenticated: false};

		case AUTH_ERROR:
			return {...state, errorMessage: action.payload};
	}

	return state;
}