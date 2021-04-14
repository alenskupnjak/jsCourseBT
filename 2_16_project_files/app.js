// WINDOW METHODS / OBJECTS / PROPERTIES

// Alert
//alert('Hello World');

// Prompt
// const input = prompt();
// alert(input);

// Confirm
if (confirm("Are you sure")) {
  console.log("YES");
} else {
  console.log("NO");
}

let val;

// Outter height and width
val = window.outerHeight;
console.log(" window.outerHeight", val);

val = window.outerWidth;
console.log("window.outerWidth", val);

// Inner height and width
val = window.innerHeight;
console.log("window.innerHeight", val);
val = window.innerWidth;
console.log("window.innerWidth", val);

// Scroll points
val = window.scrollY;
console.log("window.scrollY ", val);
val = window.scrollX;
console.log("window.scrollX ", val);

// Location Object
val = window.location;
console.log(val);
val = window.location.hostname;
console.log(val);
val = window.location.port;
console.log(val);
val = window.location.href;
console.log(val);
val = window.location.search;
console.log(val);

// Redirect
// window.location.href = 'http://google.com';
//Reload
// window.location.reload();

// History Object

// window.history.go(-2);
val = window.history.length;
console.log(val);

// Navigator Object
val = window.navigator;
console.log(val);
val = window.navigator.appName;
console.log(val);
val = window.navigator.appVersion;
console.log(val);
val = window.navigator.userAgent;
console.log(val);
val = window.navigator.platform;
console.log(val);
val = window.navigator.vendor;
console.log(val);
val = window.navigator.language;
console.log(val);

console.log(val);
