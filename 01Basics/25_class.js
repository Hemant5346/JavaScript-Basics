function newuser(username){
    this.username = username 
    console.log('added user name ')

}
function addeddeatails(username, email,password){
    newuser.call(this, username)
    this.email=email
    this.password=password

}

const tech =new addeddeatails('hemant',"goyal@gmail.com","ndfb3")

console.log(tech)