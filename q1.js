// Q1) Given an array A of size N of integers. Your task is to find the minimum and maximum elements in the array.

function minMax(arr) {
  let min = arr[0];
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  console.log(min, max);
}
minMax([3, 2, 1, 56, 10000, 167]);
minMax([1, 345, 234, 21, 56789]);
