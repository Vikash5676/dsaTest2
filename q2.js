// Q2) Given an array Arr[] of N integers. Find the contiguous sub-array(containing at least one number) which has the maximum sum and return its sum.

function contiguousSubArray(arr) {
  let sum = 0;
  let sum1 = -2 / 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      if (sum > sum1) {
        sum1 = sum;
      }
    }
    // console.log(sum);

    sum = 0;
  }
  console.log(sum1);
}

contiguousSubArray([1, 2, 3, -4, 5]);
contiguousSubArray([-1, -2, -3, -4, -5]);
