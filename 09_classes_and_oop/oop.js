const user ={
    username: 'ankur',
    loginCount: 8,
    signedIn: true,
    getUserDetails: function(){
        console.log(this.username, this.loginCount)
        console.log(this)
    }
}
// console.log(user)
// console.log(user.getUserDetails())


function User(username,loginCount,isLoggedIn){

    //this.variableName = argumentPassed(eg.-username)
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`welcome ${this.username}`)
    }
   // return this
}


// const userOne =  User('ankur' ,5 , true)
// const userTwo =  User('Piyush' ,15 , false)
// console.log(userOne)
// console.log(userTwo)
// //if we override like this this can change the original value so we have to use new keyword


//this is the correct way to override the function and even if you cannot return anything this can access everything
const userOne = new User('ankur' ,5 , true)
const userTwo = new User('Piyush' ,15 , false)

console.log(userOne)
console.log(userTwo)
console.log(userOne.constructor)//it rerturns a function