import { combineReducers } from 'redux';

import updateReducer from './updateReducer';

export default combineReducers({
    game: updateReducer
})
