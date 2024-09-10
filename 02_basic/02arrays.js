//concat(),spread method isArray(),from(),of()


const names =["ankur", "piysuh","tinku","mohit"]
const names2 =["mintu","adarsh","tarun","ritesh","naitik"]

//****** 
// names.push(names2)//it push array2 in the first array whole as a single element like (array inside the array)

//****** 
// console.log(names)
// console.log(names[4][1])   // this is how we can access the element of array which has been pushed into the other array

//to push one array element into the other we can use 'concat()'   but we need to store the result in another variable

//******
// const newName =names.concat(names2) //it combines both arrays together
// console.log(newName)


//spread method

const newNames2 =[...names, ...names2] //with the help of this method we can combine more the two arrays together 
// console.log(newNames2)

//flat(depth)
const array = [1, 2, 3, [5, 6],7,[2, 3, 4,[15, 55,75]]]
console.log(array)
const newArray = array.flat(2)//output=>[ 1,  2, 3, 5,  6, 7,  2, 3, 4, 15, 55, 75]
console.log(newArray)


//isArray(value)   checks the given value is array or not
console.log(Array.isArray(array)) //returns true

//from(value)   it convert the value into array
console.log(Array.from("ankur")) //convert the string into array eg.  [ 'a', 'n', 'k', 'u', 'r' ]


console.log(Array.from({ game: "cricket"}))//it gives empty array becouse we need to inform which part need to be converted into aray eg. key or value



let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3))//convert all three into one array
