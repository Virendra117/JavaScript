//singelton

//object literals

const mySymbol=Symbol("MyKey");


const Person={
    name:"Virendra",
    "full name":"Virendra Sonwani",
    [mySymbol]:"mykey1",
    mobile: 9876543210,
    email: "viru@yopmail.com",
    address:"B-38 Kanpur",
    isloggedIn: false,
    isloggedInDays: ["Monday","Saturday","Tuesday"]
}

console.log(Person.name);
console.log(Person["name"]);
console.log(Person["full name"]);
console.log(Person[mySymbol]);

Person["full name"]="Virendra Kumar Sonwani"
console.log(Person["full name"]);

// But We can freeze the Object means can't change the values of Object Properties

Object.freeze(Person) // Now Freeze this object

Person["full name"]="Shailendra Nigam"; // change value of ["Full Name"]
console.log(Person);
/*
 Output:
 {
  name: 'Virendra',
  'full name': 'Virendra Kumar Sonwani', // Value not change
  mobile: 9876543210,
  email: 'viru@yopmail.com',
  address: 'B-38 Kanpur',
  isloggedIn: false,
  isloggedInDays: [ 'Monday', 'Saturday', 'Tuesday' ],
  [Symbol(MyKey)]: 'mykey1'
}

*/






