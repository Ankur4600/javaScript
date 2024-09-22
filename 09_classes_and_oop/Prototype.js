// let myName = "Ankur"

// console.log(myName.length)


let heros = ['thor','ironman']
let heroPower = {
    thor: "hammer",
    ironman: "technology",
    getPower: function(){
        console.log(`ironman power is ${this.ironman}`)
    }
}

Object.prototype.hiteshSir = function(){
    console.log(`chai aur code is the best place to learn JavaScript`);
}

Array.prototype.ankur = function(){
    console.log('Padh le bhai')
}

//heroPower.hiteshSir();
//heros.hiteshSir();

//heroPower.ankur() //Error: heroPower.ankur is not a function
heros.ankur()


//inheritance

const User = {
    name:'ankur',
    email:'ankur@piyush.com'
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvaliable :false
}

const TASupport = {
    makerAssignment : 'JS assignment',
    fullTime: true,
    __proto__:TeachingSupport
}

Teacher.__proto__ = User

//morden Syntax

Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUserName = "ChaiAurCode   "

String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`The true length is ${this.trim().length}`)
}

anotherUserName.trueLength()

'ankur    '.trueLength()
'Piyush   '.trueLength()