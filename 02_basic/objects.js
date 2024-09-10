//singleton
//Objject.create

//object literals

const mySymbol = Symbol("key1")

const JsUser = {
    name: "ankur",
    "full name":  "Ankur Shrivastav",
    [mySymbol]: "mykey1",
    age: 18,
    location: "madhopur",
    email: "ankur@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["monday",'saturday']
}

//methods to acces element of object
console.log(JsUser.email)

console.log(JsUser["email"])//this is use when key is also written as string
console.log(JsUser["full name"])

//how to access an symbol when it is used as key in object
console.log(JsUser[mySymbol])


//to change any value

JsUser.email = "tinku@gmail.com"
console.log(JsUser.email)

//if we don't want that some how the values of the object is change then we freeze the object

// Object.freeze(JsUser)

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser);
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

