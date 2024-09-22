function multiplyBy5(num){
    return num*5
}

multiplyBy5.power =2

// console.log(multiplyBy5(5));
// console.log(multiplyBy5.power);
// console.log(multiplyBy5.prototype);

function createUser(username,price){
    this.username = username
    this.price = price 
}

//injecting own functionality using prototype

createUser.prototype.increment = function(){
    this.price++
}

createUser.prototype.printMe = function(){
    console.log(`price is ${this.price}`)
}

// const chai = createUser("chai",25)
// const tea = createUser("tea",250)

// //this is not the right way to inject function  we need to use new keyword otherwise it will gives you error


//if we use new keyword it tell prototype tha these are some additional function which has been added
const chai = new createUser("chai",25)
const tea = new createUser("tea",250)

tea.printMe()
tea.increment()
tea.printMe()

/*

Here's what happens behind the scenes when the new keyword is used:

--A new object is created: The new keyword initiates the creation of a new javaScript object.

--A prototype is linked: The newly created object get linked to the prototype property of the constructor function.This means that it has access to properties and methods defined on the constructor's prototype.

--The constructor is called: The constructor function is called with the specified argument and this is bound to the newly created object. If no explicit return value is specified from the constructor. JavaScript assumes this, the newly created object, to be the intended return value.

--The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.),the newly created object is returned.
*/