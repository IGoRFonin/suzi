import { combineReducers } from 'redux';

import youtubeReducer from '../pages/reducer/youtubeReducer';

const rootReducer = combineReducers({
    youtube: youtubeReducer,
});

export default rootReducer;
