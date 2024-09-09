 const name = "ankur"
 const repoCount = 15

//  console.log(name + repoCount)
console.log(`hello my name is ${name} and my repo count is  ${repoCount}` )

const gameName = new String("ankur-run-away")

// Note : all the changes we are going to make is not going to change the actual string 
// console.log(gameName) 

// console.log(gameName[4]) // gives the word or element from 4th index

// console.log(gameName.__proto__) // it display all the words of the string with index (as object)

// console.log(gameName.length) //gives the length og the string

// console.log(gameName.toUpperCase()) //convert lower case to upper case

// console.log(gameName.charAt(4)) //also gives the word which is at that index

console.log(gameName.indexOf('a')) // gives the  index of that element where it find the element first and if it does not exist then it gives -1 

 const newString = gameName.substring(4,8) // creates subString the the original string
//  console.log(newString)

 const  anotherString = gameName.slice(0, 5)
//  console.log(anotherString)

const myName = "    ankur   "
// console.log(myName.trim())

const url = "ankur_piyush_mohit_tinku"
let newUrl=url.replace("hitesh","ankur")
console.log(newUrl.includes("ankur"))
console.log(url.split("_"))


