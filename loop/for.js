//loop for while, do-while, forof

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }
// while (condition) {
    
// }

// do {
    
// } while (condition);

//////////////////////////

// ["","",""]
// [{},{},{}]
// for (const index of object) {
    
// }



const  arr=[1,2,3,4,5,6]
for (const index of arr) {
    console.log(index)
}

console.log(index);

// loop
// while, do-while, for, for-of, for-in

//while loop
// while (condition) {
    
// }


/// do-while loop
// do {
    
// } while (condition);

// for loop

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// for (let index = 0; index <= 10; index++) {
//     const element = index;
//     if (element==3) {
//         console.log(`Value of index is Detected ${element}`);
//         // break; // out of loop 
//         continue; //ignore condition run continue program
//     }
    
//     console.log(`Value of index is ${element}`);
    
    
// }



// for-of
// ["","",""]
// [{},{},{}]


// const arr=[1,2,3,4]
// for (const index of arr) {
    
//     console.log(index);
    
// }

// const cityName=["Kanpur","Agra","Lucknow"]
// for (const index of cityName) {
    
//     console.log(index);
    
// }


//////////////////////////////////////////////
// const array=[] // run karta hai

// const array={}

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     console.log(element);
    
    
// }


const greetting= "V3i Technology";
for (const greet of greetting) {
   // console.log(`Each char is ${greet}`);
    
}


////////////////////////////////
// Maps() : is object and no duplicate value gives a unique value. use as pair [key, value]

const map=new Map();
    map.set("IN","INDIA")
    map.set("USA","UNITED STATE OF AMERICA")
    map.set("PK","PAKISTAN")
    map.set("UAE","SAUDIA")
    map.set("AUS","AUSTRLIA")
    map.set("SL","SRI LANKA")
    map.set("IN","INDIA") // duplicate value
//console.log(map);

//map with key
for (const [key] of map) {    
    //console.log(key);    
}

//map with value
for (const [value] of map) {    
    //console.log(value);    
}

//map with key and value both
for (const [key,value] of map) {    
   // console.log(key, " :: ",value);    
}

//////////////////////////////////////////////////

const myObject={
    "JS": "JavaScript",
    "PY": "Python",
    "CPP": "C++",
    "C": "C Programming",

}

//////// for-in => structure

// for (const key in object) {
//     if (!Object.hasOwn(object, key)) continue;
    
//     const element = object[key];
    
    
// }

for (const key in myObject) {
//    console.log(`${key} is shortcut file name for ${myObject[key]}`);
       
}
//////////////////////
// use in array

const programing=["C#","JS","Java","CPP","PY"]

for (const key in programing) {
    
    // console.log(key);   // gives index of Array     
    //console.log(programing);   // gives Array in no. of Array     
    // console.log(programing[key]);   // gives element of Array.
}

////////////////////////use of  foreach/////////////////////////////

//foreach loop


const coding=["C#","JS","Java","CPP","PY"]
coding.forEach(function(item){
    //console.log(item);
    
})

//// foreach loop with Arrow function : ()=>{}

coding.forEach((item)=>{
    // console.log(item);
    
})
/*
////// foreach loop with Custom function 

function PrintMe(item)
{
    console.log(item);
    
}

coding.forEach(PrintMe) 
// forech ke andar custom function ka reference dete hai, 
// execution nhi dete hai 
// like, PrintMe() => reference:PrintMe and execution:()
*/
// coding.forEach((item,index,arr)=>{
// console.log(item,index,arr);

// })

//////////////////////////////////////////

const mycoding=[

    {
        languaName:"JavaScript",
        langugeFileName:"js"
    },
    {
        languaName:"Java",
        langugeFileName:"java"
    },
    {
        languaName:"Python",
        langugeFileName:"py"
    },
    {
        languaName:"C++ Programming",
        langugeFileName:"C++"
    }

]

// mycoding.forEach((item)=>{
//     // console.log(`${item.langugeFileName} is use in ${item.languaName} file.`);
    
// })

////////////////////////filter in loop /////////////////////

const myNumber=[1,2,3,4,5,6,7,8,9,10]
const NewMyNumber=myNumber.filter((num)=>num<9 && num>4)
console.log(NewMyNumber);






