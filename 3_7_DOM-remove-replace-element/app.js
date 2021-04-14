// REPLACE ELEMENT

// Create Element
const newHeading = document.createElement('h2');
console.log(newHeading);


// Add id
newHeading.id = 'task-title';
// New text node


//  ISTOOO
newHeading.textContent= 'Task List 01'
console.log(document.createTextNode('Task List'));

newHeading.appendChild(document.createTextNode('Task List 02'));

// // Get the old heading
const oldHeading = document.getElementById('task-title');
console.log(oldHeading);

// Parent, za replace moramo selektirati parent
const cardAction = document.querySelector('.card-action');

//  Replace 1 rijesenje
cardAction.replaceChild(newHeading, oldHeading);

//ili
oldHeading.remove();
cardAction.insertAdjacentElement("afterbegin",newHeading)


// //pokus collection-item
// let pokus = document.querySelectorAll('.collection-item')
// // console.log(pokus);

// // pokus[2].remove();
// // pokus = document.querySelectorAll('collection')
// // console.log(pokus);


// REMOVE ELEMENT
const lis = document.querySelectorAll('li');
console.log(lis);

// Remove list item prvi nacin
lis[2].remove();


// Remove child element drugi nacin
const list = document.querySelector('ul');
list.removeChild(lis[3]);

// CLASSES & ATTR
const firstLi = document.querySelector('li:first-child');
console.log(firstLi);

const link = firstLi.children[0];
console.log(link);

// Classes
console.log('link.className= ',link.className);
console.log('link.classList= ',link.classList);
console.log('link.classList[0]= ',link.classList[0]);


link.classList.add('testxx');
link.classList.remove('testxx');


// // Attributes
link.getAttribute('href');
link.setAttribute('href', 'http://google.com');
link.setAttribute('title', 'Google');
console.log(link.hasAttribute('title'));

link.removeAttribute('title');


