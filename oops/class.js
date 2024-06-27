// class User{
//     constructor(username,email,password){
//         this.username=username
//         this.email=email
//         this.password=password
//     }
//     encrptpassword(){
//         console.log(`encrypted password ${this.password}`)
//     }
//     encryptusername(){
//         console.log(`encrypted username ${this.username}`)
//     }
// }

// const tech =new  User('hemant',"gmail.com","122341")

// console.log(tech.encrptpassword())



function User(username,email,password){
    this.username=username;
    this.email = email;
    this.password=password
}

User.prototype.encrptpassword =function(){
    return `${this.password}`
} 
User.prototype.encryptusername=function() {
    return`${this.username}`
}


const think =new User('tes','dsfeef','sdadf')

console.log(think.encrptpassword())