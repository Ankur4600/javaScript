//for off

const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
   // console.log(num)
}


const greetings = "Hello world!"
for (const greet of greetings) {
   // console.log(`each char is ${greet}`)
}



// Maps
//The Map object holds key-value pairs and remembers the original insertion order of the keys and also contain unique value


const map = new Map();
//set the value in map

map.set("IN","India")
map.set("USA","United States of America")
map.set("Fr","France")

//console.log(map)


for (const [key, value] of map) {
    console.log(key, ":-", value)
}




const myObject = {
    "game1": "NFS",
    "game2": "Spiderman"
}
//objects cannopt be iterateable by for of loop
// for (const [key,value] of myObject) {
//     console.log(key, ":-", value)
// }