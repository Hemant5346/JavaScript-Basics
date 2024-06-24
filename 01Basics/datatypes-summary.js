// primitive  

// 7 types : string ,number ,boolean , null, undefined, symbol , bigint

// reference (non primitive). // non primitive means it is a datastructure which is used to store differnet types of datatypes and primitive is opposite

// array, objects , fucntions


const score = 100
const scorevalue= 100.3


const isloogedint =false
const outsidetemp = null

let username;

const id =Symbol('123')
const anotherId=Symbol('123')

console.log(id)
console.log(anotherId)

console.log(id == anotherId)

const bigNumber =8438483929342482384234834n

console.log(typeof bigNumber)

/// non primitiive are basically object


/// stack (copy) (besically for primitive) in this a copy is provide and if you change something then it will change on the copy only.
// heap  (refernece) (basically for non primitivce) in this copy is not created the value is changed on that only

let youtubecourse ="javascript"
let newcourseis =youtubecourse
newcourseis="golang"

console.log(youtubecourse)
console.log(newcourseis)


let userone ={
    email: 'goyalhematn110@gmail.com',
    name:'hemant'
}


let usertwo =userone

usertwo.email='sjdnfksf@gmial.com'

console.log(userone)
console.log(usertwo)

//see the output its chanfges for both