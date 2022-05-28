
function checkIfArrayIsUnique(myArray) {
  return myArray.length === new Set(myArray).size;
}


console.log(checkIfArrayIsUnique([1,2,3,4]));
console.log(checkIfArrayIsUnique([1,2,1,3,4]));


// const set1 = new Set();
// const object1 = {};

// set1.add(42);
// set1.add('forty two');
// set1.add('forty two');
// set1.add(object1);

// console.log(set1.size); //3


