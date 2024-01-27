const _path = (typeof process.env.BASE_PATH !== 'undefined' && !!((process.env.BASE_PATH+'').trim())) ? process.env.BASE_PATH : '';

export const BASE_PATH = _path;
export const IMAGES_PATH = `${BASE_PATH}/images`;
