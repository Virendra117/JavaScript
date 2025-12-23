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



