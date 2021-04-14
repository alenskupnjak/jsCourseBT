// let val;

const list = document.querySelector('ul.collection');
console.log(document.querySelector('ul.collection'));
console.log(list.childNodes);
console.log(list.childNodes[0]);
console.log(list.childNodes[0].nodeName);

// nodeType
console.log(list.childNodes[1].nodeType);
// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype


// Get children element nodes
console.log('list.children=', list.children);

list.children[1].textContent = 'Zamjenio sam drugog u nizu';
console.log('list.children[1]',list.children[1]);

// // Children of children
list.children[3].children[0].id = 'test-link';
console.log('list.children[3].children[0]',list.children[3].children[0]);

// // First child
console.log('list.firstChild',list.firstChild);
console.log('list.firstElementChild',list.firstElementChild);


// // Last child
console.log('list.lastChild=',list.lastChild);
console.log('list.lastElementChild=',list.lastElementChild);

// // Count child elements
console.log('list.childElementCount=',list.childElementCount);


console.log('********************************************');
const listItemDrugi = document.querySelector('li.collection-item:nth-child(3)');
listItemDrugi.style.background = '#333'
listItemDrugi.style.color = 'red'
listItemDrugi.style.padding = '20px'
console.log(listItemDrugi);

const listItem = document.querySelector('li.collection-item:first-child');
listItem.style.background = 'blue' 
listItem.style.color = 'yellow'
console.log(listItem);

// Get parent node
listItem.parentNode.style.backgroud = 'blue'
console.log('listItem.parentNode=',listItem.parentNode);
listItem.parentNode.style.color = 'green'

console.log('listItem.parentElement=',listItem.parentElement);
// listItem.parentElement.style.color = 'orange'


console.log('listItem.parentElement.parentElement',listItem.parentElement.parentElement);

// // Get next sibling
console.log('listItem.nextSibling',listItem.nextSibling);
console.log('listItem.nextSibling',listItem.nextElementSibling);
console.log('listItem.nextElementSibling.nextElementSibling.previousElementSibling',listItem.nextElementSibling.nextElementSibling.previousElementSibling);

// // Get prev sibling
console.log(listItem.previousSibling);
console.log(listItem.previousElementSibling);
