class User{
    constructor(email,password){
        this.email =email
        this.password=password
    }

    get email(){
        return `${this._email}`
    }

    set email(value){
        this._email=value
    }
 
    get password(){
        return `${this._password}`
    }
    set password(value){
        value =Math.random()
        this._password=value
    }
}

const hemant =new User("kgjfb","subejjnuisj")
console.log(hemant.email)