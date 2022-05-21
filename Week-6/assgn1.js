function maxSunContArr (array) {
 let max_current = array[0];
 let max_global = array[0];
 for(let i=1; i<(array.length-1); i++) {
  max_current = Math.max(array[i],(max_current+array[i]));
   if (max_current>max_global) {
    max_global = max_current;
   }
 }
return max_global;
}

array = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
console.log(maxSunContArr(array));