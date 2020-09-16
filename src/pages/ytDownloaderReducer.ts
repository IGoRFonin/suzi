import { YTDownloaderAction } from './ytDownloaderAction';
import { initial } from '@devexperts/remote-data-ts';
import { createReducer } from 'typesafe-actions';

import { YTDownloaderRD } from './types';

const YTDownloaderReducer = createReducer<YTDownloaderRD>(initial).handleAction(
    [YTDownloaderAction.request, YTDownloaderAction.success, YTDownloaderAction.failure, YTDownloaderAction.cancel],
    (_state, action) => action.payload,
);

export default YTDownloaderReducer;
