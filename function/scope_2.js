// let a=10
// const b=20
// var c=30

// console.log(a); // 10
// console.log(b); // 20
// console.log(c); // 30


/////////////////////////////////////////

if (true) {
    let a=10
    const b=20
    var c=30
}
console.log(a); //  a is not defined
// console.log(b); //  b is not defined
// console.log(c); // 30 this is not possible because c define into scope so value of c print only in scope. this is big bug.

//Note: so good programmer not using var datatype they can use only let and const