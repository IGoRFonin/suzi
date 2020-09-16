// https://www.googleapis.com/youtube/v3/search?part=snippet&q=eminem&key=AIzaSyD-PmAiw-jZn9f3S5UEOEREb0iaYQZZtSs&maxResults=50
import axios from 'axios';

import { SearchVideo } from './types';

const URL = 'https://www.googleapis.com/youtube/v3';
export const YOUTUBE_KEY = 'YOUTUBE_KEY';
export const DEFAULT_YOUTUBE_KEY = 'AIzaSyD-PmAiw-jZn9f3S5UEOEREb0iaYQZZtSs';

const getApi = (path: string, params: Record<string, string | number>): Promise<any> => {
    const key = window.localStorage.getItem(YOUTUBE_KEY) || '';
    return axios.get(`${URL}${path}`, { params: { ...params, key } });
};

export const getSearchVideo = (q: string): Promise<SearchVideo[]> => {
    return getApi('/search', { q, maxResults: '50', type: 'video', part: 'snippet' }).then(({ data }) =>
        data.items.map((item: any) => ({
            title: item.snippet.title,
            channelTitle: item.snippet.channelTitle,
            videoId: item.id.videoId,
            channelId: item.snippet.channelId,
            images: item.snippet.thumbnails,
        })),
    );
};
