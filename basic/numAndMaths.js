const score = 400
console.log(score)

const balance = new Number(100)
console.log(balance)

console.log(balance.toString().length)
console.log(balance.toFixed(2))//up to  2 decimal value(eg. 100.00)

const otherNumber = 123.28643
console.log(otherNumber.toPrecision(4)) //gives the first four digit of the numebr and round of if there is any decimal valur (eg.123.3)

const num = 1000000
console.log(num.toLocaleString("en-IN")) //convert number in indian number system(eg.10,00,000)


//++++++++++++++++++++++ maths ++++++++++++++++++

console.log(Math) //in console gives the function which are in Math libarary
console.log(Math.abs(-4)) //remove the sign and give the positive value

console.log(Math.round(9.8)) // round  the number to its nearest Integer
console.log(Math.ceil(4.2))  //round the number to the nearest largest integer
console.log(Math.floor(4.9)) //round the number to the nearest smallest integer
console.log(Math.min(9,4,6,8,3)) //give the minimum value from the array
console.log(Math.max(9,4,6,8,3)) //give the maximum value from the array

console.log(Math.random()) //gemerate random number between 0 to 1
console.log((Math.random()*10)+10)
console.log(Math.floor(Math.random()*10)+1)

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max - min + 1))+min)

 

