function quickSort(array: number[]): number[] {
  if (array.length < 2) {
    return array;
  }

  const pivot = array[0];
  const less = [];
  const greater = [];

  for (let i = 1; i < array.length; i++) {
    if (array[i] <= pivot) {
      less.push(array[i]);
    } else {
      greater.push(array[i]);
    }
  }

  return quickSort(less).concat([pivot]).concat(quickSort(greater));
}

console.log(quickSort([10, 5, 2, 3]));
