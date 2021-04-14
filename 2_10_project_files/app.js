const person = {
  firstName: "Steve",
  lastName: "Smith",
  age: 17,
  email: "steve@aol.com",
  hobbies: ["music", "sports"],
  address: {
    city: "Miami",
    state: "FL",
  },
  getBirthYear: function (x) {
    return 2017 - this.age + x;
  },
};

let val;

val = person;
// Get specific value
val = person.firstName;
val = person["lastName"];
val = person.age;
val = person.hobbies[1];
console.log(val);

val = person.address.state;
console.log(val);

val = person.address["city"];
console.log(val);

val = person.getBirthYear(0);
console.log(val);

val = person.getBirthYear(10);
console.log(val);


const people = [
  { name: "John", age: 30 },
  { name: "Mike", age: 23 },
  { name: "Nancy", age: 40 },
];

for (let i = 0; i < people.length; i++) {
  console.log(people[i].name);
}
