export const BASE_PATH =
  typeof process.env.BASE_PATH !== 'undefined' && !!(process.env.BASE_PATH + '').trim() ? process.env.BASE_PATH : '';
export const IMAGES_PATH = `${BASE_PATH}/images`;
