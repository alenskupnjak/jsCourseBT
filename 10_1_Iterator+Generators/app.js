// Iterator Example
function nameIterator(names) {
  let nextIndex = 0;

  return {
    next: function() {
      if (nextIndex < names.length){
        return {value: names[nextIndex++], done: false, index: nextIndex }
      } else {
         return {done: true} 
      }
    }
  }
}

// Create an array of names
const namesArr = ['Jack', 'Jill', 'John'];
// Init iterator and pass in the names array
const names = nameIterator(namesArr);
console.log(names.next().index);
// console.log(names.next().index);
// console.log(names.next().index);

console.log(names.next().done);

console.log(names.next().value);
console.log(names.next().done);
console.log(names.next().value);
console.log(names.next().value);
console.log(names.next().done);






// **************************************************************
// Generator Example
function* sayNames() {
  yield '001';
  yield '002';
  yield '003';
}

const ime = sayNames();
console.log(ime.next().value);
console.log(ime.next().value);
console.log(ime.next().value);
console.log(ime.next().value);




// ID Creator
function* createIds() {
  let index = 1;

  while(true) {
    yield index++;
  }
}

const gen = createIds();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

