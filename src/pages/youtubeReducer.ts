import { initial } from '@devexperts/remote-data-ts';
import { combineReducers } from 'redux';
import { createReducer } from 'typesafe-actions';

import { SearchVideoRD } from './types';
import { changeSearchAction, clearSearchAction, searchVideosAction } from './youtubeActions';

const searchReducer = createReducer<string>('')
    .handleAction(changeSearchAction, (_state, action) => action.payload)
    .handleAction(clearSearchAction, (_state, _action) => '');

const searchVideoReducer = createReducer<SearchVideoRD>(initial).handleAction(
    [searchVideosAction.request, searchVideosAction.success, searchVideosAction.failure, searchVideosAction.cancel],
    (_state, action) => action.payload,
);

export default combineReducers({
    search: searchReducer,
    searchVideo: searchVideoReducer,
});
