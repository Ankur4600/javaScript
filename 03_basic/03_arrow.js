const user ={
    username : "ankur",
    price :999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "tinku"
// user.welcomeMessage()

// console.log(this)



// function one(){
//     let userName ="ankur"
//     console.log(this.userName)
// }

// one()

// const  two = function(){
//     let username = "ankur"
//     console.log(this.username)
// }

// two()


// const two =()=>{
//     let username = "ankur"
//     console.log(this.username)
// }

// two()



//arrow function

//syntax:-  () => {}
//type 1

//if curly braces are used in arrow function so it is compulsory to user "return" 
 const addTwo = (num1, num2) => {
    return num1 + num2// explicit return
}

// console.log(addTwo(55,56))

//type 2

const add = (number1, number2) => number1 + number2 //here no need to use "return"


// console.log(add(12,18))

//type 3
const addnumber = (num1, num2) => (num1 + num2) //it is implicit return


// console.log(addnumber(7,9))


//returning object from arrow function

const obj = () => ({username: "ankur"})

console.log(obj())
