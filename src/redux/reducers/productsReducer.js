import {ActionTypes} from '../constants/action-types.js';

const initialState = {
	product:[],
}
export const products = (state=initialState, {type,payload}) =>{
	switch(type){
		case ActionTypes.SET_PRODUCT:
			return {...state, product:payload};
		default:
			return state;
	}
}

export const selectedProducts = (state={}, {type, payload}) => {
	switch(type){
		case ActionTypes.SELECTED_PRODUCT:
			return {...state,...payload};
		case ActionTypes.REMOVE_SELECTED_PRODUCT:
			return {};
		default:
			return state;
	}
}