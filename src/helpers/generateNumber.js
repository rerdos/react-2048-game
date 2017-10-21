import { clone } from './common';

const getEmptyCoords = (board) => board.reduce((emptyCoords, row, yCoord) => {
  const emptyCoordsInRow = row.reduce((emptyCoords, cell, xCoord) => 
    (cell ? emptyCoords : emptyCoords.concat([[xCoord, yCoord]])), []
  );
  return emptyCoords.concat(emptyCoordsInRow);
}, []);

const randomIntFromInterval = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const selectRandomCoords = emptyCoords => {
  const index = randomIntFromInterval(0, emptyCoords.length - 1)
  return {
    x: emptyCoords[index][0],
    y: emptyCoords[index][1]
  }
}

const selectRandomFromArgs = (...args) => args[randomIntFromInterval(0, args.length - 1)]

export default (_state) => {
  const state = clone(_state);
  const emptyCoords = getEmptyCoords(state);
  
  if (!emptyCoords.length) return state;

  const { x, y } = selectRandomCoords(emptyCoords);

  state[y][x] = selectRandomFromArgs(2, 4);

  return state;
};