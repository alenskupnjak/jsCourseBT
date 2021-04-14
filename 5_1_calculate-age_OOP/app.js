// Person constructor
function Person(name, dob) {
  this.name = name;
  
  // this.age = age;
  this.birthday = new Date(dob);
  console.log('01-this.birthday=' + this.birthday);
  console.log('02- Date.now()=' + Date.now());
  
  this.calculateAge = function(){    
    const diff =  Date.now() - this.birthday.getTime();
    console.log('diff= ' + diff);
  
    console.log(' Date.now() ' + Date.now() );
    console.log(' this.birthday.getTime() ' + this.birthday.getTime() );
    
    const ageDate = new Date(diff);
    console.log('ageDate= ' + ageDate, 'ageDate.getUTCFullYear()=',ageDate.getUTCFullYear() );
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
  
}

const brada = new Person('Brada', '1-1-1978');
console.log(brada);
console.log(brada.calculateAge());

console.log('----------------');
const john = new Person('John', 30);
console.log(john);

console.log('----------------');
const brad = new Person('Brad', '9-10-1981');
console.log(brad.calculateAge());

// this.alert(1)
console.log(' Date.now().getTime()=' + Date.now());