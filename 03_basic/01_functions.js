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