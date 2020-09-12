import { createAction } from 'typesafe-actions';

export const changeSearch = createAction('@youtube/changeSearch', (title: string) => title)();
export const clearSearch = createAction('@youtube/clearSearch')();
