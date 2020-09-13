import { createAction } from 'typesafe-actions';

export const changeSearchAction = createAction('@youtube/changeSearch', (title: string) => title)();
export const clearSearchAction = createAction('@youtube/clearSearch')();
