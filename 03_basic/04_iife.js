//Immediately Invoked Function Expressions (IIFE)

/* Syntax :- () () the first"()" is to write function definition and  second "()" is two invoke or call the function  */

// iife is use for immediately calling that perticular function and also protect function from global variable polution

(function chai(){
    //named iife 
    console.log(`DB CONNECTED`)
}) ();

//if there two iife function one after another it is compulsory to use ";" after invoke of function


((name) =>{
    console.log(`DB CONNECTED TO ${name}`)
})("ANKUR")