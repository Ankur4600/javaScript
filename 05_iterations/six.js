// const coding = ["js", "ruby", "java", "python", "cpp"]



// const values = coding.forEach( (item) => {
//     console.log(item);
//    // return item  //forEach loop doesnot return any value 
// })

// console.log(values)


const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// //const newNumber = myNumber.filter( (num) => num > 4)
// const newNumber = myNumber.filter( (num) => {
//     return num > 4
// })

// console.log(newNumber)



// const newNums = []
// myNumber.forEach( (num) => {
//     if(num>4){
//         newNums.push(num)
//     }
// })

// console.log(newNums)



const books = [
    {title: "Book One", genre: "fiction", publish: 1981, edition: 2004},
    {title: "Book two", genre: "Non-fiction", publish: 1992, edition: 2008},
    {title: "Book three", genre: "History", publish: 1999, edition: 2007},
    {title: "Book four", genre: "Non-fiction", publish: 1989, edition: 2010},
    {title: "Book five", genre: "Science", publish: 2009, edition: 2014},
    {title: "Book six", genre: "fiction", publish: 1987, edition: 2010},
    {title: "Book seven", genre: "History", publish: 1986, edition: 1996},
    {title: "Book eight", genre: "Science", publish: 2011, edition: 2016},
    {title: "Book Nine", genre: "Non-fiction", publish: 1981, edition: 1989},
    {title: "Book Ten", genre: "fiction", publish: 1987, edition: 2010},
    {title: "Book Eleven", genre: "Science", publish: 2010, edition: 2016},
    {title: "Book Twelve", genre: "Non-Friction", publish: 1981, edition: 1989}
]

let userBooks = books.filter( (bk) => bk.genre === "History")
 userBooks = books.filter( (bk) => {
    return bk.publish >= 1995 && bk.genre === "History"
})

console.log(userBooks)