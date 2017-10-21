export const clone = array => JSON.parse(JSON.stringify(array));

export const filterEmpty = (array) => array.filter(number => number);

export const mergeNumbers = (array) => {
  array.forEach((number, index) => {
    if (number === array[index + 1]) {
      array[index] = number * 2;
      array.splice(index + 1, 1);
    }
  });

  return array;
};


export const fillUpEmptySpaces = (array, length) => {
  for (let i = 0; i < length; i++) {
    if (!array[i]) {
      array[i] = 0;
    }
  }

  return array;
};