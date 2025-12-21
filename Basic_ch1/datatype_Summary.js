// Primitive Datatype
// 7 type : String, Number, Boolean, null, undefined, Symbol, BigInt.
// const str="V3i Technology"
// const counter=50
// const conterValue=23.98
// const isLoggedIn=true
// const IsWetherTemp=null
// const studentId;

// const Id= Symbol('9844')
// const anotherID= Symbol('9844')

// console.log(Id)
// console.log(anotherID)



// console.log(Id===anotherID)

/*

Note: Each Symbol is unique even if they have same description beclause
In JavaScript, Symbol values are always unique—even if they have identical descriptions—so Id and anotherID are distinct symbols. As a result, Id === anotherID evaluates to false.

*/





// Non Primitive / Reference type Datatype

//Array, Object, Function

// value lene ke liye refrence use krta hai

const names=['V3i Technology', 'V3i Solutions', 'V3i Services']

const person={
    name:'V3i Technology',
    age:10,
    isEmployed:true
}

function greet(){
    console.log("Welcome to V3i Technology")
}

console.log(typeof names) //object
console.log(typeof person) //object
console.log(typeof greet) //function
