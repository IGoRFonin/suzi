import { combineReducers } from 'redux';
import { createReducer } from 'typesafe-actions';
import { changeSearch, clearSearch } from '../actions/youtubeActions';

const youtubeSearchReducer = createReducer('' as string)
    .handleAction(changeSearch, (_state, action) => action.payload)
    .handleAction(clearSearch, (_state, _action) => '');

export default combineReducers({
    search: youtubeSearchReducer,
});
