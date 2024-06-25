const user ={
    username: 'hemamn',
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username},welcome to the website`)
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username ="sam"
// user.welcomeMessage()

// console.log(this);


// function tech(){
//     let username ="hemant"
//     console.log(this.username)
// }

// tech()




const tech = () =>{
    let username ="hemant"
    console.log(this);

} 
tech()



// const addtwo = (num1,num2) =>{
//     return num1+num2
// }


// is curly basic is used then return is used if curly basis is not usd the return is also not used
const addtwo = (num1,num2) => num1+num2
console.log(addtwo(3,4))

const addtwo2 =(num1,num2) => ({username :'hemant'})
console.log(addtwo2())


const myarray=[4,35,2,4,2]
// myarray.forEach(() => ())