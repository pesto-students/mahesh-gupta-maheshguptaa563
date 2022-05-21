function spiralPrint(m, n, array) {
 let i;
 let k = 0;
 let l = 0;
 let newArr = [];
 while (k<m && l<n) {
  for (i=l; i<n; i++) {
   newArr.push(array[k][i]);
  }
  k++;
  for (i=k; i<m; i++) {
   newArr.push(array[i][n-1]);
  }
  n--;
  if (k<m) {
   for (i=n-1; i>=0; i--){
    newArr.push(array[m-1][i]);
   }
   m--
  }
  if (l<n){
   {
    for(i=m-1; i>=k; i--) {
     newArr.push(array[i][l]);
    }
    l++
   }
  }
 }
  return newArr;
}

array = [ 
 [1,2,3],
 [8,5,6],
 [10,7,8]
];
console.log(spiralPrint(3,3,array));