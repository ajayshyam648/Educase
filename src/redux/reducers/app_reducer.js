'use-strict'


import * as Actions from '../actions'


const AppDataReducer = (state = {AppData: {}}, action) => {

  if(action.type === Actions.UPDATE_APP_DATA){
    state = action.payload;
  }

	return state;
}


export default AppDataReducer;
