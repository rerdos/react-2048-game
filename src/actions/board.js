import { INIT_NEW_GAME, GENERATE_NUMBERS, SWIPE_DOWN } from '../constants';

export const newBoard = () => ({ type: INIT_NEW_GAME });
export const generateNumbers = () => ({ type: GENERATE_NUMBERS });
export const swipeDown = () => ({ type: SWIPE_DOWN });