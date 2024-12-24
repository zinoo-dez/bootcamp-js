// "use strict";

// var, let, const are used to declare variables in JavaScript
// var is global variable
/*
var a;
a = 10; // assign value to variable
a = 20; // reassign value to variable

console.log('a :', a)
if (true) {
    var a = "apple";
    console.log('scope a :', a)
}
console.log('outside a :', a)

var a = 500;
console.log('a :', a)

apple = "apple";
console.log('apple :', apple)
*/


// let is block scope variable
let b = 10;
b = 200
console.log('b :', b)
let bb;
bb = "boss";
console.log('bb :', bb)

// let bb = 100; // error code
// console.log('bb2 :', bb)

let b2 = 100; // global declearation
if (true) {
    console.log('inside scope b2 :', b2)
    // let b2 = 200; // local declearation
}
console.log('outside b2 :', b2)

const PI = 3.14;
// PI = 400; // cann't reassign
console.log('PI :', PI)


const PORT = 3000;
if (true) {
    const PORT = 3001;
    console.log('INSIDE PORT :', PORT)
}
console.log('OUTSIDE PORT :', PORT)

// if (true) {
//     var a = 10;
// }
// // console.log(a)

// function test() {
//     var a = 10;
// }
// // test();
// console.log('function a :', a)