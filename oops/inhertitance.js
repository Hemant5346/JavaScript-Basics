class User{
    constructor(username){
        this.username=username
    }
    login(){
        console.log(`username is logged in ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password =password
    }
    addCourse(){
        console.log(`a new course was added by ${this.username}`)
    }
}

const tech =new Teacher('dsnf','wefwef','wfwef')
tech.addCourse()

const tea=new User('hemanbt')
tea.login()

