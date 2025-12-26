//IMMEDIATELY INVOKED FUNCTION EXPRESSIONS [IIFE]

// function demo(){
//     console.log(`DB Connection`);
    
// }
// demo()
/*
function demo(){
    console.log(`DB Connection`);
    
}()
    //note: not working
*/
/// IIFE me ye kaam karta
(function demo(){
    console.log(`DB Connection`);
    
}());
/////////////////

//()() // IIFE
(function demo(){
    console.log('DB Connection Two');
    
})();

(function demo(name){
    console.log(`DB Connection Two ${name}`);
    
})('Virendra');

((name)=>{
    console.log(`DB Connection Two ${name}`);
    
})('Virendra');

