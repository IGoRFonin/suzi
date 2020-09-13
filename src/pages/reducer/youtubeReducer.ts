import { combineReducers } from 'redux';
import { createReducer } from 'typesafe-actions';

import { changeSearchAction, clearSearchAction } from '../actions/youtubeActions';

const youtubeSearchReducer = createReducer('')
    .handleAction(changeSearchAction, (_state, action) => action.payload)
    .handleAction(clearSearchAction, (_state, _action) => '');

export default combineReducers({
    search: youtubeSearchReducer,
});
