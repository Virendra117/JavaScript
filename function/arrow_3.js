const user={
    name:"Virendra",
    price: 300,
    welcomeMessage: function(){
        console.log(`${this.name} welcome to my course`); // current context ke sath 'this' ka use karte hai
    }


}
// context meas value of user object
// user.welcomeMessage()

// if change of name in user object

user.name="Sonu"
// user.welcomeMessage();

////////////////////////////////////////////////////////
// basic structure of arrow function ()=>{}

// const addTwo=(num1,num2)=>{
//     const result=num1+num2;
//     return result;

// }
// {} me 'return' use hota hai mean explicitly return use hota hai

// const addTwo=(num1,num2)=> result=num1+num2;   



const addTwo=(num1,num2)=> (num1+num2);   
// () me 'return' use nhi hota hai

console.log(addTwo(3,5));
