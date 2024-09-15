//fasly values
//false, 0, -0,BigInt(0n), "", null, undefined, NaN

//truthy value
//"0", "false", " ", [], {}, function(){}, 



const userEmail = []

if(userEmail.length === 0){
    console.log("array is empty")
}


const emptyObj = {}
//method to  check the length of the object => (Object.keys(object_name).length)
if(Object.keys(emptyObj).length ===0){
    console.log("Object is empty")
}


//Nullish Coalescing Operator (??): null undefined

let val1;

// val1 = 5 ?? 10

// val1 = null ?? 10

// val1 = undefined ?? 15

val1 = null ?? 15 ?? 20

// console.log(val1)

//Terniary Operator

//Syntax:- condition ? true statement : false statement;

const iceTeaPrice = 100
iceTeaPrice <=80 ? console.log("less than 80") : console.log("more than 80") 