// Create element
const li  = document.createElement('li');

// // Add class
li.className = 'collection-item';

// // Add style
li.style.background = 'red'

// // Add id
li.id = 'new-item';

// // Add attribute
li.setAttribute('title', 'Novi zapis');

// // Create text node and append
li.appendChild(document.createTextNode('Pozdarv'));

// // Create new link element
const link = document.createElement('a');

// // Add classes
link.className = 'delete-item secondary-content';

// // Add icon html
link.innerHTML = '<i class="fa fa-remove"></i>';

// // Append link into li
li.appendChild(link);

// // Append li as child to ul dodaj na sve
document.querySelector('ul.collection').appendChild(li);

console.log(link);
console.log(li);


