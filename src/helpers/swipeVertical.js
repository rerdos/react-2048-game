import { clone, filterEmpty, mergeNumbers, fillUpEmptySpaces } from './common';
import putRandomNumber from './generateNumber';

const getColumn = (board, index) => board.map(row => row[index]);

const swipeAction = (state, index, direction) => {
  const length = getColumn(state, index).length;
  let column = filterEmpty(getColumn(state, index));
  if (direction === 'down') column.reverse();

  column = mergeNumbers(column);
  column = fillUpEmptySpaces(column, length);

  return column;
}

export default (_state, direction) => {
  const state = clone(_state);

  state.forEach((_, y) => {
    const column = swipeAction(state, y, direction);
    if (direction === 'down') column.reverse();
    column.forEach((number, x) => {
      state[x][y] = number;
    });
  });

  if (JSON.stringify(_state) === JSON.stringify(state)) return state;
  return putRandomNumber(state);
}