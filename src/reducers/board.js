import {
  INIT_NEW_GAME,
  GENERATE_NUMBERS,
  SWIPE_DOWN,
  SWIPE_UP,
  SWIPE_RIGHT,
  SWIPE_LEFT
} from './../constants';
import putRandomNumber from './../helpers/generateNumber';
import swipeVertical from './../helpers/swipeVertical';
import swipeHorizontal from './../helpers/swipeHorizontal';

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
      return swipeVertical(state, 'down');
    case SWIPE_UP:
      return swipeVertical(state, 'up');
    case SWIPE_LEFT:
      return swipeHorizontal(state, 'left');
    case SWIPE_RIGHT:
      return swipeHorizontal(state, 'right');
    default:
      return state;
  }
};