function greaterElem(arr, n) {
  var i, j, next;
  for (i = 0; i < n; i++) {
    next = -1;
    for (j = i + 1; j < n; j++) {
      if (arr[i] < arr[j]) {
        next = arr[j];
        break;
      }
    }
    console.log(next);
  }
}
var arr = [6, 8, 0, 1, 3];
var n = arr.length;
greaterElem(arr, n);
