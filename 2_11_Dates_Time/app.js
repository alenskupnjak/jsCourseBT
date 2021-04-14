let val;
// console.log(new Date(year, month[, day[, hour[, minutes[, seconds[, milliseconds]]]]]));
let birthday = new Date('9-10-1981 11:25:00');
birthday = new Date('September 10 1981');
birthday = new Date('9/10/1981');
console.log(birthday);



const today = new Date();
console.log(new Date());

val = today.getMonth();
console.log('today.getMonth()=',val);

val = today.getDate();
console.log('today.getDate()=',val);

val = today.getDay();
console.log('today.getDay()=',val);

val = today.getFullYear();
console.log('today.getFullYear()=',val);

val = today.getHours();
console.log('today.getHours()=',val);

val = today.getMinutes();
console.log('today.getMinutes()=',val);

val = today.getSeconds();
console.log('today.getSeconds()=',val);

val = today.getMilliseconds();
console.log('today.getMilliseconds()=',val);

val = today.getTime();
console.log('today.getTime()=',val);

// januarr pocinje od nule
birthday.setMonth(0);
birthday.setDate(12);
birthday.setFullYear(1985);
birthday.setHours(3);
birthday.setMinutes(30);
birthday.setSeconds(25);

console.log(birthday);


/******************* */
let danas = new Date();
let dd = danas.getDate();
let mm = danas.getMonth()+1; 
let yyyy = danas.getFullYear();
if(dd < 10) 
{
    dd='0'+dd;
} 

if(mm < 10) 
{
    mm='0'+mm;
} 
danas= mm+'-'+dd+'-'+yyyy;
console.log(danas);
danas= mm+'/'+dd+'/'+yyyy;
console.log(danas);
danas= dd+'-'+mm+'-'+yyyy;
console.log(danas);
danas= dd+'/'+mm+'/'+yyyy;
console.log(danas);




let unix_timestamp = 1587182614
// Create a new JavaScript Date object based on the timestamp
// multiplied by 1000 so that the argument is in milliseconds, not seconds.
let date = new Date(unix_timestamp * 1000);
console.log('date='+ date);

// Hours part from the timestamp
var hours = date.getHours();
// Minutes part from the timestamp
var minutes = "0" + date.getMinutes();
// Seconds part from the timestamp
var seconds = "0" + date.getSeconds();

// Will display time in 10:30:23 format
var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

console.log(formattedTime);