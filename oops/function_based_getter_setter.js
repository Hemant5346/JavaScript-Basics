function User(username,email){
    this.username=username
    this.email =email

    Object.defineProperty(this,"username",{
        get: function(){
            return this._username
        },
        set: function(value){
            this._username=value
        }

    })
    Object.defineProperty(this,"email",{
        get: function(){
            return this._email
        },
        set: function(value){
            this._email=value
    
        }

    })
}

const think =new User("hemtant","seffr")
console.log(think.email)