// define of function
function abc(){
    console.log("Hello V3i Technology.")
}

// calling of function
abc();
/*
Note: 
    abc is name of function, it's also called reference and parathesis () is called execution.
    abc => reference/function name
    () => execution

*/


function calculateCartItemPrice(num){
    return num
}

// console.log(calculateCartItemPrice(200));

///using spread concept
function NewcalculateCartItemPrice(...num){
    return num
}
// console.log(NewcalculateCartItemPrice(200,300,500));

///////////sum of these number////////////
let totalItemPrice=NewcalculateCartItemPrice(200,300,500)
// console.log(totalItemPrice[0]+totalItemPrice[1]+totalItemPrice[2]);
let result=0
for(let i=0;i<totalItemPrice.length;i++)
{
     result+=parseInt(totalItemPrice[i])
 
}
 console.log(result);

 //////////////////////////////////////////////

 const user={
    name:"Surendra",
    price:199
 }

 function handelUser(userObject){
    console.log(`Username is ${userObject.name} and course price is ${userObject.price}`)
 }

//  handelUser(user)


///We can passing direct object like that

handelUser({
    name:"Surendra",
    price:499
})

const myNewArrray=[200,300,400,600]

function findMyArrayValue(getArray){
    return getArray[2]
}
console.log(findMyArrayValue(myNewArrray)); // 400
///////////////////////////////////////////////////////////////////////////
// now define dicrect array in function

console.log(findMyArrayValue([100,300,500,600])); //500

//deceleration of function
function abc(num){
    const number=num
    return number
}

console.log(abc(4));


// other decleration of funtion

const abcTwo=function(num){
    return num+6
}

console.log(abcTwo(4));

/////////////////////////////////////////////////







