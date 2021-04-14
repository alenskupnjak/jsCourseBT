function EventObserver() {
  this.observers = [];
}

EventObserver.prototype = {
  pokreni: function(fn) {
    console.log(this.observers);
    this.observers.push(fn);
    console.log(`You are now subscribed to ${fn.name}`);
  },
  stani: function(fn) {
    console.log('fn=',fn);
    
    // Filter out from the list whatever matches the callback function. If there is no match, the callback gets to stay on the list. The filter returns a new list and reassigns the list of observers.
    this.observers = this.observers.filter(function(item){
      if(item !== fn) {
        return item;
      }
    });
    console.log(this.observers);
    
    console.log(`You are now unsubscribed from ${fn.name}`);
  },
  fire: function() {
    console.log(this.observers);
    this.observers.forEach(function(item) {      
      item.call();
    });
  }
}

const click = new EventObserver();


// Event Listeners
document.querySelector('.sub-ms').addEventListener('click', function() {
  click.pokreni(getCurMilliseconds);
});

document.querySelector('.unsub-ms').addEventListener('click', function() {
  click.stani(getCurMilliseconds);
});

document.querySelector('.sub-s').addEventListener('click', function() {
  click.pokreni(getCurSeconds);
});

document.querySelector('.unsub-s').addEventListener('click', function() {
  click.stani(getCurSeconds);
});

document.querySelector('.fire').addEventListener('click', function() {
  click.fire();
});




// Click Handler
const getCurMilliseconds = function() {
  console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`);
}

const getCurSeconds = function() {
  console.log(`Current Seconds: ${new Date().getSeconds()}`);
}