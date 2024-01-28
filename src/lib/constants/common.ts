export const APP_HOST = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://blckwltz.github.io';
export const BASE_PATH =
  typeof process.env.BASE_PATH !== 'undefined' && !!(process.env.BASE_PATH + '').trim() ? process.env.BASE_PATH : '';
export const IMAGES_PATH = `${BASE_PATH}/images`;
export const OG_IMAGE_PATH = `${APP_HOST}/${BASE_PATH}/api/og`;
