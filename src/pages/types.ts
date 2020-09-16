import { RemoteData } from '@devexperts/remote-data-ts';
import { HttpError, SearchVideo } from 'src/api/types';

import { Mp3Data } from './../api/types';

export type SearchVideoRD = RemoteData<HttpError, SearchVideo[]>;
export type YTDownloaderRD = RemoteData<HttpError, Mp3Data>;
