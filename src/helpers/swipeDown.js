import { clone } from './common';

const getColumn = (board, index) => board.map(row => row[index]).reverse();
const filterEmpty = (array) => array.filter(number => number);

const swipeDownAction = (state, index) => {
  const length = getColumn(state, index).length;
  let column = filterEmpty(getColumn(state, index));

  column.forEach((number, index) => {
    if (number === column[index + 1]) {
      column[index] = number * 2;
      column.splice(index + 1, 1);
    }
  });

  for (let i = 0; i < length; i++) {
    if (!column[i]) {
      column[i] = 0;
    }
  }

  return column;
}

export default (_state) => {
  const state = clone(_state);

  state.forEach((_, y) => {
    const column = swipeDownAction(state, y);
    column.reverse().forEach((number, x) => {
      state[x][y] = number;
    });
  });

  return state;
}