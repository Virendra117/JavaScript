console.log("String Concept in JavaScript by V3i Technology");
let str1="Virendra";
let str="V3i Technology";

// We can define as Object, like that
let UserName=new String("V3i Technology")

console.log(UserName.toString()) //for String Value
console.log(UserName.length) // For find length of string
console.log(UserName.charAt(4)) // for find charactor Position of String
console.log(UserName.at(2)) //find charactor position of string
console.log(UserName.toUpperCase()) // find upper case of string
console.log(UserName.indexOf('T')) // find index position of string charactor

let UserSubString=UserName.substring(0,4) // find Substring(start,end)
console.log(UserSubString) ; //Space including so get string V3i_

let employee="   Ritesh  "
console.log(employee) // get including space
console.log(employee.trim()) // get excluding space
console.log(employee.trimStart())
console.log(employee.trimEnd())

let url="file:///D:/Syllabus/Advance%20Diploma%20in%20Computer.pdf"
console.log(url.replace('%20','-'))

console.log(url.includes('Diploma')) // string match

console.log(UserName.split(' ')) // get string swparated with space
//split(separator) // separate with Array
//split(separator, limit) // find number of words in given String like 1 or 2 or 3
console.log(UserName.split(' ',1)) // ['V3i'] only one word

const tempestString = "Oh brave new world that has such people in it.";
console.log(tempestString.split(' ').length)


const monthString = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";
console.log(monthString.split(',').length) 


//back tik ``
// console.log(`${str1} is working with ${str}`);



