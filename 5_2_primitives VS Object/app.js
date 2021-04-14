// String
const name1 = 'Jeff';
console.log(name1);

// OVO JE OBJEKT!!
const name2 = new String('Jeff');
console.log(name2);

name2.foo = 'bar';

console.log(typeof name1);
console.log(typeof name2);

if(name2 === 'Jeff'){
  console.log('YES');
} else {
  console.log('NO');
}

// Number
const num1 = 5;
const num2 = new Number(5);
console.log(typeof num1);
console.log(typeof num2);

// Boolean
const bool1 = true;
const bool2 = new Boolean(true);
console.log(typeof bool1);
console.log(typeof bool2);

// Function
const getSum1 = function(x, y){
  return x + y;
}
console.log(getSum1);
console.log(typeof getSum1);

const getSum2 = new Function('x','y', 'return x + y');
console.log(getSum2);
console.log(typeof getSum2);

// Object
const john1 = {name: "John"};
console.log(john1);
const john2 = new Object({name: "John"});
console.log(john2);

if(john1 === john2){
  console.log('YES');
} else {
  console.log('NO');
}

// Arrays
const arr1 = [1,2,3,4];
const arr2 = new Array(1,2,3,4);

// Regular Expressions
const re1 = /\w+/;
const re2 = new RegExp('\\w+');

console.log(re2);