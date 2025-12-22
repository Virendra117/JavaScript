const score=500 // define as number
console.log(score)

const balance=new Number(500) // strictly define as number
console.log(balance)

console.log(balance.toString()) // number convert into string
console.log(balance.toFixed(2)) // number convert into decimal with 2 decimal number


const rupees=1000000
console.log(rupees.toLocaleString()) //this is US Standard
console.log(rupees.toLocaleString('en-IN')) // this is Indian Standard

const anotherNumner=new Number(100000)
console.log(rupees.MAX_VALUE)
console.log(Number.MAX_VALUE)//maximum range of Number object
console.log(Number.MIN_VALUE)//minimum range of Number object


/**************************Math Object*********************************************/

console.log(Math) // this is object type

console.log(Math.abs(-5))     // gives always +ive value

console.log(Math.abs(5))      // gives always +ive value

console.log(Math.round(5.3))  // 5 => gives round off number

console.log(Math.round(5.6))  // 6 => gives round off number

console.log(Math.ceil(5.3))   // 6 => gives round off upper number

console.log(Math.floor(5.7))  // 5 => gives round off base number

console.log(Math.max(3,4,5,6,7,8)) //8 => gives max value

console.log(Math.min(3,4,5,6,7,8)) // 3=> gives min value

console.log(Math.random()) // generate random number less than 1 with decimal of large number

console.log((Math.random()*10) + 1) // always gives single digit number




