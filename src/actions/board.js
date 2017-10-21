import { INIT_NEW_GAME, GENERATE_NUMBERS, SWIPE_DOWN, SWIPE_UP, SWIPE_RIGHT, SWIPE_LEFT } from '../constants';

export const newBoard = () => ({ type: INIT_NEW_GAME });
export const generateNumbers = () => ({ type: GENERATE_NUMBERS });
export const swipeDown = () => ({ type: SWIPE_DOWN });
export const swipeUp = () => ({ type: SWIPE_UP });
export const swipeLeft = () => ({ type: SWIPE_LEFT });
export const swipeRight = () => ({ type: SWIPE_RIGHT });