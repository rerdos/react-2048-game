import { INIT_NEW_GAME, GENERATE_NUMBERS, SWIPE_DOWN } from './../constants';
import putRandomNumber from './../helpers/generateNumber';
import swipeDown from './../helpers/swipeDown';

const newGameBoard = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0]
];

export default (state = newGameBoard, { type }) => {
  switch (type) {
    case INIT_NEW_GAME:
      return putRandomNumber(putRandomNumber(newGameBoard));
    case GENERATE_NUMBERS:
      return putRandomNumber(state);
    case SWIPE_DOWN:
      return swipeDown(state);
    default:
      return state;
  }
};