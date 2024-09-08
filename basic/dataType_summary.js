// # Primitive

// 7 Types : String, Number ,Boolean , null, Undefined, Symbol, BigInt

const score = 100
const scorevalue = 100.3

const isLogedIn =false
const outsideTemp = null

//declaration of symbol
const id = Symbol('123')
const anotherId = Symbol('123') //false
let myName;
 
// console.log(id === anotherId)

const bigNumber = 9889187766333645n// BigInt

// typeof
console.log(typeof scorevalue) //number
console.log(typeof isLogedIn) //boolean
console.log(typeof outsideTemp) //object
console.log(typeof anotherId) //symbol
console.log(typeof bigNumber) //biigint
console.log(typeof myName)  //undefined

//Reference  (Non primitive)

//Array, Objects,Functions

const heros = ["shaktiman", "naagraj", "doga"] //array

//Objects
let myObj = {
    name: "ankur",
    age: 22,
    surname: "shrivastav"
}

//functions
const myFunction=function(){
    console.log("hello world")
}


//typeof
console.log(typeof heros); //Object
console.log(typeof myObj); //Object
console.log(typeof myFunction);//function