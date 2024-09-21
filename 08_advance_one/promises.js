//** 
const promiseOne = new Promise(function(resolve, reject){
    //do an async task
    //DB calls, cryptography, networkcall
    setTimeout(function(){
        console.log('async task is complete');
        resolve();
    },1000)
});

promiseOne.then(function(){
    console.log('promise consumed')
})


//** 
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('async task 2')
        resolve()
    },1000)
}).then(function(){
    console.log('Async 2 resolved');
})


//** 
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve({username: "ankur",email: "ankur@abc.com"})
    }, 1000);
})

promiseThree.then(function (user){
    console.log(user);
})



//**
const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "ankur", password: "12345"})
        }else{
            reject('Error: something went wrong')
        }
    },1000)
})
promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then(function(username){
    console.log(username)
}).catch(function(error){
    console.log(error);
}).finally(() => {
    console.log('the promise is either resolved or reject')
})


//**
const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: 'ankur', password: '12345'})
        }else{
            reject('Error: 02 Something went wrong')
        }
    }, 1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

consumePromiseFive()


//** 
// async function getAllUsere() {
//    try {
//         const response = await fetch ('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data)
//    } catch (error) {
//         onsole.log('E:',error)
//    }
// }
// getAllUsere()


fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data)
})
.catch((error) => {
    console.log(error)
})
