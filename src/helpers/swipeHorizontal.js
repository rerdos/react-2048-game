import { clone, filterEmpty, mergeNumbers, fillUpEmptySpaces } from './common';
import putRandomNumber from './generateNumber';

const swipeAction = (state, index, direction) => {
  const length = state[index].length;
  let row = filterEmpty(state[index]);
  if (direction === 'right') row.reverse();

  row = mergeNumbers(row);
  row = fillUpEmptySpaces(row, length);

  return row;
}

export default (_state, direction) => {
  const state = clone(_state);

  state.forEach((_, y) => {
    const row = swipeAction(state, y, direction);
    if (direction === 'right') row.reverse();
    row.forEach((number, x) => {
      state[y][x] = number;
    });
  });
  if (JSON.stringify(_state) === JSON.stringify(state)) return state;
  return putRandomNumber(state);
}