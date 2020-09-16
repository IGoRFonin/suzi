import { combineReducers } from 'redux';

import youtubeReducer from '../pages/youtubeReducer';
import YTDownloaderReducer from '../pages/ytDownloaderReducer';

const rootReducer = combineReducers({
    youtube: youtubeReducer,
    ytDownloader: YTDownloaderReducer,
});

export default rootReducer;
