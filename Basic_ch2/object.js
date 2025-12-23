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

// console.log(Person.name);
// console.log(Person["name"]);
// console.log(Person["full name"]);
// console.log(Person[mySymbol]);

Person["full name"]="Virendra Kumar Sonwani"
//console.log(Person["full name"]);

// But We can freeze the Object means can't change the values of Object Properties

//Object.freeze(Person) // Now Freeze this object

Person["full name"]="Shailendra Nigam"; // change value of ["Full Name"]
// console.log(Person);
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


Person.message=function(){
  console.log("Hello This is Messsage Passing.")
}
//console.log(Person.message); //[Function (anonymous)]
console.log(Person.message());



///////////////////////////////////////////////
//Decleration of Object

const tinderUser=new Object(); // Singleton Object
// console.log(tinderUser); // {} Empty Object

const tinderUser1={};  // Non-Singleton Object
// console.log(tinderUser1); // {} Empty Object


//passing value of this object
tinderUser1.id="Viru1234"
tinderUser1.name="Virendra Sonwani"
tinderUser1.email="viru@yopmail.com"
tinderUser1.IsloggedIn=false

console.log(tinderUser1);


const userstemp={
  name:"virendra",
  college:{
    collegeName:"KIET",
    city: "Ghaziabad",
    state:"Uttar Pradesh"

  },
  address:"Kanpur",
  phone:"+91-9876543210",
  IscollegeIN: false
}

console.log(userstemp);
/*
  output:
    {
      name: 'virendra',
      college: { collegeName: 'KIET', city: 'Ghaziabad', state: 'Uttar Pradesh' },
      address: 'Kanpur',
      phone: -9876543119,
      IscollegeIN: false
    }

*/

// console.log(userstemp.name); // virendra
// console.log(userstemp.college.collegeName); // KIET
// console.log(userstemp.phone); // +91-9876543210



const obj1={1:"a",2:"b", 3:"c"}
const obj2={4:"d",5:"e", 6:"f"}

// const obj3={obj1,obj2}
// console.log(obj3)
/*
  Output:
    {
      obj1: { '1': 'a', '2': 'b', '3': 'c' },
      obj2: { '4': 'd', '5': 'e', '6': 'f' }
    }

*/
// console.log(obj3.obj1[1]); // a is exist in obj1
// console.log(obj3.obj2[5]); // e is exist in obj2

//Object.assign(target,source) 
/*
  Note: source object se  value lega aur target me chali jaygi so
  hum ek {} object as target use karte aur ab jitne chahe hum object source ke jaisa
  use kar skte hai. like const obj4 = Object.assign({},obj1,obj2)
*/ 
const obj3 = Object.assign(obj1,obj2)
// console.log(obj3);
//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

// sahi tarika => const obj3 = Object.assign({}, obj1,obj2)

const obj4 = Object.assign({},obj1,obj2)
// console.log(obj4);

//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

const obj5={...obj1, ...obj2} // ye bhi ek tarika hai
//console.log(obj5);
//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }


//obj={key:value}
console.log(obj1);
//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }
console.log(Object.keys(obj1))
//[ '1', '2', '3', '4', '5', '6' ]
console.log(Object.values(obj1))
//[ 'a', 'b', 'c', 'd', 'e', 'f' ]


console.log(Object.entries(obj1));

/*
  Output: Convert into Array with key and value i.e, [key,value]
    [
      [ '1', 'a' ],
      [ '2', 'b' ],
      [ '3', 'c' ],
      [ '4', 'd' ],
      [ '5', 'e' ],
      [ '6', 'f' ]
    ]



*/

console.log(Person.hasOwnProperty('name')); //check key and values
//output: true =>means 'name' key is avialable in Person object




















