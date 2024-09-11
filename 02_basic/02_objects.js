//const user1 = new Object() //singleton object
const user1 = {}// non singleton object


user1.id = "123abd"
user1.name = "ankur"
user1.age = 22
user1.address = "lucknow"

// console.log(user1)

const user2 = {
    email: "abc@gmail.com",
    fullName: {
        userFullName: {
            firstName:  "ankur",
            lastName: "Shrivastav"
        }
    }
}
// console.log(user2.fullName.userFullName)

const obj1 ={1: "a", 2: "b"}
const obj2 ={3: "a", 4: "b"}

// const obj3 ={ obj1,obj2}


// const obj3 = Object.assign({}, obj1, obj2)// assign method to combine two object

const obj3 = {...obj1, ...obj2}

// console.log(obj3)


const users =[
    {
        id:1,

        email: "a@gmail.com"
    },
    {
        id:2,

        email: "a@gmail.com"
    },
    {
        id:3,

        email: "a@gmail.com"
    }
]
console.log(users[1].email)

//access all the keys and values of the object

let allKeys = Object.keys(user1) //return all keys in an array
console.log(allKeys) 


let allValues = Object.values(user1) //return all the values in the array
console.log(allValues)


//entries(object)  return key and value in single array

let entrie = Object.entries(user1)//[[ 'id', '123abd' ],[ 'name', 'ankur' ],[ 'age', 22 ],[ 'address', 'lucknow' ]]
console.log(entrie)


//to check key property present present in the object or not

console.log(user1.hasOwnProperty("email")) //result is in boolean






//destructuring object
const course = {
    courseName: "js in Hindi",
    price: "999",
    courseInstructor: "hitesh"
}
//course.courseInstructor //in place of accesaing object elemnet like this we can destructure the object as below
const {courseInstructor: instructor} =course  // when we see curlybracess just after const or let or var  it means that we are de-strucuring the object
 console.log(instructor)

 //JSON

//  {
//     "name": "hitesh",
//     "courseName": "js in hindi",
//     "price": "free"
//  }
//JSON is a data formate mostly used in api

//the data which has been can be any from like it can be in array form which contain object as below
[
    {},
    {},
    {}

]