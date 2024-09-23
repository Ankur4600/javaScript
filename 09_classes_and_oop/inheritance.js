class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`A new course was addedv by ${this.username}`)
    }
}

const chai = new Teacher('chai', 'chai@gmail.com', '1234')

chai.addCourse()

const masalaChai = new User('masalachai')
masalaChai.logMe()

console.log(chai instanceof User)