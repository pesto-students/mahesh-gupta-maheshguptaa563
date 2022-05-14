function ascArr (array, n) {
 let count0 = 0;
 let count1 = 0;
 let count2 = 0;
 let newArr = [];
 for(let i = 0; i<n; i++) {
  if (array[i]==0) {
   count0++;
  }
  if (array[i]==1) {
   count1++;
  }
  if (array[i]==2) {
   count2++;
  }
 for (let i=0; i<count0; i++) {
   newArr[i] = 0;
  }
 for (let i=count0; i<(count0+count1); i++){
   newArr[i] = 1;
  }
 for (let i=(count0+count1); i<n; i++){
   newArr[i] = 2;
  }
 }
 console.log(newArr);
}


let n = 6;
array = [1, 1, 2, 2, 0, 0];
ascArr(array,n);