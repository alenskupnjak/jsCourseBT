document.querySelector('.clear-tasks').addEventListener('click', function(event){
  console.log('Hello World');
// može i # u linku koji ima isti efakat..
  event.preventDefault();
});

document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e){
  console.log(e);

  // može i # u linku koji ima isti efakat..

  e.preventDefault();
  let val;
  val = e;

  // Event target element
  val = e.target;
  console.log(val);
  
  val = e.target.id;
  console.log(val);

  val = e.target.className;
  console.log(val);

  console.log(e.target.classList);

  val = e.target.classList[0];
  console.log(val);

  e.target.innerText = 'Bok!'

  // // Event type
  val = e.type;
  console.log(val);

  // // Timestamp
  val = e.timeStamp;
  console.log(val);

  // // Coords event relative to the window
  val = e.clientY;
  console.log(val);
  val = e.clientX;
  console.log(val);

  // // Coords event relative to the element
  val = e.offsetY;
  console.log(val);
  val = e.offsetX;
  console.log(val);

}