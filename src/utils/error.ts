import { HttpError } from './../api/types';

export const getHttpErrorData = (err = { response: { status: '', message: '' } }): HttpError => {
    const { status, message } = err.response;

    return { status, message };
};
