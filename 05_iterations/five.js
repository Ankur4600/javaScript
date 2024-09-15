 const coding = ["js", "ruby", "java", "python", "cpp"]

 //for each loop

 //method 1
 coding.forEach(function (value){
    //console.log(value)
 })


//method 2
 coding.forEach((item) => {
   // console.log(item)
 })


//method 3
 function printMe(item){
    console.log(item)
 }
 coding.forEach(printMe)


 //can also get access of many things while iterating array lijke item, index ,full array

 coding.forEach((item, index, array) => {
    console.log(item, index, array)
 })

 const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
 ]



myCoding.forEach((item) => {
    //console.log(item.languageFileName)
    console.log(item.languageName)
})
