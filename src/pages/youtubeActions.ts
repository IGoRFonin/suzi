import { createAction, createAsyncAction } from 'typesafe-actions';

import { SearchVideoRD } from './types';

export const changeSearchAction = createAction('@youtube/changeSearch', (title: string) => title)();
export const clearSearchAction = createAction('@youtube/clearSearch')();
export const searchVideosAction = createAsyncAction(
    '@youtube/search/fetch',
    '@youtube/search/success',
    '@youtube/search/failure',
    '@youtube/search/cancel',
)<SearchVideoRD, SearchVideoRD, SearchVideoRD, SearchVideoRD>();
