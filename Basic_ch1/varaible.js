console.log("Welcome to V3i Technology")
// const, var, let
const studentId=101;
// Const me value change nhi kar sakte means value lock in variable
var email="student123@yopmail.com";
let mobile=9876543210;
studentCity="Kanpur Nagar"
let studnetState;

//studentId=3  // Now Allow
email="altername@yopmail.com";
mobile=1234567890;

console.log(studentId);

console.log(email);
console.log(mobile);

//OR You can use

console.table([studentId,email, mobile, studentCity, studnetState]);

/*
Prefer not to use var
because of Issue in block scope and functional scope

*/

