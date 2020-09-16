export type SearchImage = {
    height: number;
    width: number;
    url: string;
};

export type SearchVideo = {
    title: string;
    channelTitle: string;
    videoId: string;
    channelId: string;
    images: {
        default: SearchImage;
        medium: SearchImage;
        high: SearchImage;
    };
};

export type HttpError = {
    status: string;
    message: string;
};

export type Mp3Data = {
    320: string;
    256: string;
    192: string;
    128: string;
};
