// Primitive Data - Types
// String, Number, Boolean, undefined, null, NaN, Symbol //Stack Memery

// Nonn-Primitive Data - Types // Heap Memory
// Object, Array, Function

// Stack memory allocation for primitive variables
let primitiveVar = 'Hello'; // String
let anotherPrimitiveVar = 123; // Number

// Heap memory allocation for non-primitive variables
let objectVar = { name: 'John' }; // Object
let arrayVar = [1, 2, 3]; // Array
let functionVar = function () { console.log('Hello, World!'); }; // Function


var a = 100;
var a = "100"
var a = true;
var a = 3.4;
var a = Infinity
var a = "100" + 100
var a = "100" - 100;
var a = "bobo" * 300
var a = [];
var a = [] == []
var a = {} == {};
var a = {} == [];
console.log('typeof a :', typeof a, a)
var a1;
var a1 = null;
console.log('typeof a1 :', typeof a1, a1)
const aa = [100, 200];
const bb = aa;
bb.push(500)
bb.push(600)
console.log("bb", bb)
console.log("aa", aa)
