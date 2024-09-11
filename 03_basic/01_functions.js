//functions


// function sayMyName(){
//     console.log("a")
//     console.log("n")
//     console.log("k")
//     console.log("u")
//     console.log("r")
// }
// sayMyName()

// function addTwoNumbere(number1, number2){
//     console.log(number1+number2)
// }
// addTwoNumbere(2,9);

function addTwoNumber(number1,number2){
    let result = number1*number2
    return result
    // return number1+number2
}
// console.log(addTwoNumber(55,15))

// function loginUserMessage(userName){
//     if(!userName){
//         console.log("please enter username")
//         return
//     }
//     return `${userName} just logged in`
// }

// console.log(loginUserMessage())


//assigning a default value ro the userName if the user not pass any value
function loginUserMessage(userName = "ankur"){
    return `${userName} just logged in`
}

console.log(loginUserMessage()) //calling without arguument
console.log(loginUserMessage("mohit")) // calling with argumnet 


//rest operator (...)

//with rest operator we an pass any number of arguments while calling the  function
function calculateCartPrice( val1,val2, ...num){
    return num
}
console.log(calculateCartPrice(200,500,999,0.00110))

//passing object as the argument in the function and accesing its members
const user ={
    userName: "ankur",
    age: 22
}

function passingObject(anyObject){
    console.log(`username is ${anyObject.userName} and the age is ${anyObject.age}`)
}
passingObject(user)//passing object as argumnet


//we can directly write object in the argumnet
passingObject({
    userName: "mohit",
    age: 23
})


//we can also pass array as argunment
const myNewArray = [9, 8, 8, 9, 1, 8, 7, 7, 2, 2]
function returnThirdValue(array){
    return array[2]
}
console.log(returnThirdValue(myNewArray))

//we cxan also write array as argunment

console.log(returnThirdValue([55,45,98,11,68]))

