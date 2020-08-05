'use-strict'


import { combineReducers, createStore } from 'redux';

import AppDataReducer from './reducers/app_reducer';

const AppReducers = combineReducers({
  AppDataReducer
});

const rootReducer = (state, action) => {
	return AppReducers(state,action);
}

let store = createStore(rootReducer);


export default store;
