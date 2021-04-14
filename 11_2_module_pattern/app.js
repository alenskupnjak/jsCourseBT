// Basic structure

(function() {
  // Declare private vars and functions

  return {
    // Declare public var and functions
  }
})();



// STANDARD MODULE PATTERN
const UICtrl = (function() {
  let text = 'Kaj sada Hello World';

  const changeText = function() {
    const element = document.querySelector('h1');
    element.textContent = text;
  }

  return {
    callChangeText: function() {
      changeText();
      console.log(text);
    }
  }
})();

UICtrl.callChangeText();
// UICtrl.changeText();

console.log(UICtrl.text);


/////---------------------------------
// REVEALING MODULE PATTERN
const ItemCtrl = (function() {
  let data = [];

  function add(item) {
    data.push(item);
    console.log('Item Added....');
  }

  function get(id) {
    return data.find(item => {
      return item.id === id;
    });
  }

  function getAll() {
    console.log(data);
  }

  // samo kroz return postoji veza sa vanjskim svijetom
  return {
    add: add,
    get: get,
    getAllPokus: getAll
  }
})();

ItemCtrl.add({id: 1, name: 'John'});
ItemCtrl.add({id: 2, name: 'Mark'});
ItemCtrl.add({id: 3, name: 'Mark', surname:'slon'});
console.log(ItemCtrl.get(3));
ItemCtrl.getAllPokus()