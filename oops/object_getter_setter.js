const User ={
    _email: "nkdfnf",
    _password:'sjdnfkjfe',


    get email(){
        return this._email.toUpperCase()
    },
    set email(value){

        this._email =value
    }
}


const think =Object.create(User)
console.log(think.email)