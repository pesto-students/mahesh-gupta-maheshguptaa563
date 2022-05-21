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
  if(a > b) return 1;
  if(a < b) return -1;
  return 0;
});
let size = arr.length;
console.log(pairDiff(arr, 4, size));