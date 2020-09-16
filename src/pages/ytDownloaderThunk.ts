import { failure, pending, success } from '@devexperts/remote-data-ts';
import { ThunkAction } from 'redux-thunk';
import { getHttpErrorData } from 'src/utils/error';
import { Action, RootState } from 'typesafe-actions';

import { YTDownloaderAction } from './ytDownloaderAction';
import { getYtMp3Links } from 'src/api/ytDownload';

export const ytDownloaderThunk = (
    q: string,
): ThunkAction<void, RootState, unknown, Action<string>> => async dispatch => {
    dispatch(YTDownloaderAction.request(pending));
    try {
        const result = await getYtMp3Links(q);
        dispatch(YTDownloaderAction.success(success(result)));
    } catch (err) {
        dispatch(YTDownloaderAction.failure(failure(getHttpErrorData(err))));
    }
};
