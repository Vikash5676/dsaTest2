// Q3) Given a sorted array arr[] of size N and a number X, find a pair in array whose sum is closest to X.

function closestSum(arr, x) {
  let newarr = [];
  for (let i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] <= x) {
        newarr.push(arr[i] + arr[j]);
      }
    }

    // if (sum > sum1) {
    //   sum1 = sum;
    //   sum = 0;
    // }
  }
  newarr.sort();
  console.log(newarr[newarr.length - 1]);
}

closestSum([10, 22, 28, 29, 30, 40], 54);
closestSum([1, 2, 3, 4, 5], 10);
