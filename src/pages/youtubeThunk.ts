import { failure, pending, success } from '@devexperts/remote-data-ts';
import { ThunkAction } from 'redux-thunk';
import { getSearchVideo } from 'src/api/youtube';
import { getHttpErrorData } from 'src/utils/error';
import { Action, RootState } from 'typesafe-actions';

import { searchVideosAction } from './youtubeActions';

export const searchVideoAction = (
    q: string,
): ThunkAction<void, RootState, unknown, Action<string>> => async dispatch => {
    dispatch(searchVideosAction.request(pending));
    try {
        const result = await getSearchVideo(q);
        console.log('res', searchVideosAction.success(success(result)));
        dispatch(searchVideosAction.success(success(result)));
    } catch (err) {
        dispatch(searchVideosAction.failure(failure(getHttpErrorData(err))));
    }
};
