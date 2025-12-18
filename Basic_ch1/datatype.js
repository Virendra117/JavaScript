/*
JavaScript Data Types (2 Categories)

1: Primitive Data Types

Ye single value store karte hain.

2: Non-Primitive (Reference) Data Types

Ye multiple values / objects store karte hain.


*/ 

//Primitive Data Types (Total 7)
let a = 10;
let b = 10.5;


let name = "Ram";
let city = 'Kanpur';


let isActive = true;

let x;
console.log(x); // undefined

let y = null;


let big = 12345678901234567890n;


let id = Symbol("id");

//Non-Primitive (Reference) Data Types

//Object
let student = {
  name: "Ram",
  age: 20
};




//Array
let marks = [80, 90, 85];


//Function

function add(a, b) {
  return a + b;
}


///typeof Operator

typeof 10        // "number"
typeof "Ram"     // "string"
typeof true      // "boolean"
typeof undefined // "undefined"
typeof null      // "object" ❗ (JS bug)
typeof []        // "object"
typeof {}        // "object"
typeof function(){} // "function"


