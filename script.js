var now = new Date()
var date = now.toLocaleDateString();
var time = now.toLocaleTimeString();
console.log(date + ' ' + time)

var myString = "2021-11-24"; 
var array = new Array();

array = myString.split('-');

var newDate = (array[2] + "." + array[1] + "." + array[0]);

console.log(newDate);