function pairDiff(arr, size, diff) {
  var i = 0;
  var j = 1;
  while (i < size && j < size) {
   if (i != j && arr[j] - arr[i] == diff) {
    return true;
   }
   else if (arr[j] - arr[i] < diff) {
    j++;
   }
   else {
    i++;
   }
  }
  return false;
}

var arr = [10, 7, 9, 15];
arr.sort(function(a, b) {
  return a - b;
});
let size = arr.length;
console.log(pairDiff(arr, 4, size));