const user={
    username: "hemant",
    logincount: 8,
    isloogedin: true,

    getuserdetains: function(){
        // console.log('got user details')
        // console.log(`username: ${this.username}`)
        const detai=console.log(this.username)
        return detai
    }

}

console.log(user.username)
console.log(user.getuserdetains())





///contrructer fucntion is used 


function User(username, followers ,isloogedin){
    this.username =username
    this.followers=followers
    this.isloogedin=isloogedin
    return this 
}

const user1=new User("heamfrba",21,true)
const user2=new User('bdfbfw',35,false) // new basically create a new instance for not overrittinh the code

// console.log(user1)

// isntance of is also used 
console.log(user2 instanceof User);