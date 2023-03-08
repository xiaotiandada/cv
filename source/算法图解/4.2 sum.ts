const sumArray = (arr: number[]): number => {
  if (arr.length === 0) {
    return 0;
  }

  if (arr.length === 1) {
    return arr[0];
  }

  return arr[0] + sumArray(arr.slice(1));
};

console.log(sumArray([2, 4, 6]));
