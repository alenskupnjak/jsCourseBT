// EVENT BUBBLING
document.querySelector('.card-title').addEventListener('click', function(){
  console.log('card title');
});

document.querySelector('.card-content').addEventListener('click', function(){
  console.log('card content');
});

document.querySelector('.card').addEventListener('click', function(){
  console.log('card');
});

document.querySelector('.col').addEventListener('click', function(){
  console.log(' stisnut je: col');
});


// **************************************************
// EVENT DELGATION

          // // ne funkcionira jer selektira samo prvog
          // const delItem = document.querySelector('.delete-item');
          // delItem.addEventListener('click', deleteItem);

document.body.addEventListener('click', deleteItem);



function deleteItem(e){
  console.log(e.target);
  console.log(e.target.parentElement);
  console.log(e.target.parentElement.parentElement);

        // !!!!  1) ovo nije dobra opcija je obuhvaca usko podrucje!
        // if(e.target.className === 'fa fa-remove'){
        //   console.log('delete item  1 nacin');
        // }

      // 2) ovo nije dobra opcija jer ako se npe. doda neki class u algoritmi JS, nece raditi
      // if(e.target.parentElement.className === 'delete-item secondary-content'){
      //   console.log('delete item  2 nacin');
      // }

  // 3)-najbolja opcija, obuhvaca i novododane elemante
  if(e.target.parentElement.classList.contains('delete-item')){
    console.log('delete item 3  nacin');
    console.log(e.target.parentElement.classList);
    
    e.target.parentElement.parentElement.remove();
  }
}