// this keyword inside a function refers to different objects depending on how the function is called and sometimes we accidentally lose reference to the this variable.

// We use call, bind and apply methods to set the this keyword independent of how the function is called

// 1...The bind method creates a new function and sets the 'this' keyword to the specified object.

const mahesh = {
 name : 'Mahesh',
 age: 24,
};
const akash = {
 name : 'Aakash',
 age: 25,
};

function greeting() {
 console.log(`My name is ${this.name} and i am ${this.age} years old`);
}

const greetingMahesh = greeting.bind(mahesh);
greetingMahesh();

const greetingAakash = greeting.bind(akash);
greetingAakash();

// Here greeting.bind(mahesh) creates a new function with 'this' set to mahesh object, which we then assign to greetingMahesh

// -----------------------------------------------------------------------------------------------------------
// 2... The call method sets the 'this' inside the function and immediately executes that function.

// The difference between call() and bind() is that the call() sets the this keyword and executes the function immediately and it does not create a new copy of the function, while the bind() creates a copy of that function and sets the this keyword.

// same code as above
greeting.call(mahesh);
greeting.call(akash);

// Call() also accepts a comma-separated list of arguments. 

// -----------------------------------------------------------------------------------------------------------
// The apply() method is similar to call(). Choosing one of the other is conditional
// If set of arguments are already known at compile time, then call() is best to use, if set of arguments
// are not known at runtime in cases where the inputs might be coming from a file or different network, then use apply(),
// We can also choose apply where some functions has to be used and they dont accept anything part from positional arguments
// another difference between call and apply is that the apply() method accepts an array of arguments instead of comma separated values.

// same code as above except the function



function greet(greeting,lang) {
 console.log(lang);
 console.log(`${greeting}, My name is ${this.name} and i am ${this.age} years old`);
}

greet.apply(mahesh, ['Welcome','English']);

var num = [2,7,9,10]
console.log(Math.max.apply(null,num));
console.log(Math.min.apply(null,num));