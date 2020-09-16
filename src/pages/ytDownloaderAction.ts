import { createAsyncAction } from 'typesafe-actions';

import { YTDownloaderRD } from './types';

export const YTDownloaderAction = createAsyncAction(
    '@ytDownloader/fetch',
    '@ytDownloader/success',
    '@ytDownloader/failure',
    '@ytDownloader/cancel',
)<YTDownloaderRD, YTDownloaderRD, YTDownloaderRD, YTDownloaderRD>();
