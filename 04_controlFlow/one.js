// if
 const isUserLoggedIn = true
 const temperature = 41
 if(temperature ===40){
    console.log("temoerature is less than 50")
 }else{
    console.log("temperatureb is greater than 50")
 }


 //<, >, <=, >=, ==, !=, ===, !==


 const score = 200

 if(score > 100){
    let power = "fly"
    console.log(`User power: ${power}`)
 }
 
 //console.log(`User power:${power}`)

 const balance = 1000
 
 //if(balance < 500) console.log("test"),console.log("test2");// this is a bad practice don't do this


if (balance < 500){
    console,log("less than 500")
}else if (balance <750){
    console.log("less than 750")
}else if (balance < 900){
    console.log("less than 900")
}else {
    console.log("less than 1200")
}

const userLoggedIn =true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard && 2==3){
    console.log("allow to shope")
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("user logged in")
}
