import axios from 'axios';
import { Mp3Data } from './types';

const URL = 'https://www.yt-download.org/api/button/mp3';

const getApi = (path: string): Promise<{ data: string }> => {
    return axios.get(`${URL}${path}`);
};

const URL_REGEXP = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi;

export const getYtMp3Links = (videoId: string): Promise<Mp3Data> => {
    return getApi(`/${videoId}`).then(res => {
        const mp3s = (res.data.match(URL_REGEXP) || []).filter(s => s.search('mp3') !== -1);

        return {
            320: mp3s.find(mp3 => mp3.search('mp3/320') !== -1) || '',
            256: mp3s.find(mp3 => mp3.search('mp3/256') !== -1) || '',
            192: mp3s.find(mp3 => mp3.search('mp3/192') !== -1) || '',
            128: mp3s.find(mp3 => mp3.search('mp3/128') !== -1) || '',
        };
    });
};
