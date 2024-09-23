class User{
    constructor(email,password){
        this.email = email
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }
    get password(){
       // return this._password.toUpperCase()
       return `${this._password}ankur`
    }

    set password(value){
        this._password = value
    }
}


const ankur = new User('ankur@gmail.com','abcd')
console.log(ankur.password)
console.log(ankur.email)