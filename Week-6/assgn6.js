function closestSumOfThree(arr, target) {
 var closestSum = 0;
 for (let i=0; i<arr.length; i++) {
  for (let j=i+1; j<arr.length; j++) {
   for (let k=j+1; k<arr.length; k++) {
    if ((target-closestSum) > (target - (arr[i]+arr[j]+arr[k]))) {
     closestSum = arr[i]+arr[j]+arr[k];
    }
   }
  }
 }
 return closestSum;
}

let arr = [ 1, 2, 3, 4, -5 ];
let x = 10;
console.log(closestSumOfThree(arr, x));