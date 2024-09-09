//dates 
let myDate = new Date()
console.log(myDate)// eg. 024-09-09T06:09:44.119Z
console.log(myDate.toString())// eg. Mon Sep 09 2024 11:39:44 GMT+0530 (India Standard Time)
console.log(myDate.toDateString())// eg. Mon Sep 09 2024
console.log(myDate.toLocaleString())// eg. 9/9/2024, 11:39:44 AM
console.log(typeof myDate)//eg. object


let myNewDate = new Date(2024,2,24)
console.log(myNewDate.toDateString())// eg. Sun Mar 24 2024
console.log(myNewDate.toLocaleString())//eg .3/24/2024, 12:00:00 AM



let myTime = Date.now()
console.log(myTime)
console.log(myDate.getTime())//both gives time in milisecond


let newDate = new Date()
console.log(newDate.getTime())
console.log(newDate.getFullYear())
console.log(newDate.getDate())
console.log(newDate.getDay())
