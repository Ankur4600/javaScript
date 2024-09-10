//array
const arr = [1, 4, 7, 9, 4, 3, 5]
const names = ["ankur", "piyush", "mohit", "tinku"]

const arr2 = new Array(1, 2, 3, 4)
console.log(names[1])


//Array methods

names.push(98)  //adds element in the end of the array
names.push(49) 
console.log(names)
names.pop()    //remove element fron the end of the array
console.log(names)

names.unshift("shrivastav")  //add element in the beginning of the array
console.log(names)
names.shift() //remove element form the starting end of the array
console.log(names)

console.log(names.includes("ankur")) //if "ankur" present in the array is return true else return false

console.log(names.indexOf("ankur"))


// slice, splice

console.log("A",names)
const names1 = names.slice(1, 2) //it does not includes thye range  result ["piyush"] and does not effect the original array

console.log(names1)
console.log("B", names)
const names3 = names.splice(1, 2)//it includes the range ofthe array and also effect the original array 

console.log(names3)  //['piyush', 'mohit']
console.log("C", names)   //['ankur', 'tinku, 98]

