//singleton object (The Singleton Pattern ensures that a class can only have a single instance throughout the lifetime of an application. By restricting the instantiation of a class to one object, you can ensure that shared resources or data are managed consistently across different parts of your application.)

// // const myTinder = new Object() ///here object() is constructer
// console.log(myTinder)

const mytinder={} //this is non singleton object

mytinder.id="123"
mytinder.name ="hemanr"
mytinder.isloogedin=false
// console.log(mytinder);


const regularuser={
    email:'goyalhemanrt5436@gmail',
    fullname: {
        userfullNmame:{
            firstname:'hemanr',
            lastname:"goyal"
        }
    }
}
console.log(regularuser.fullname.userfullNmame.firstname)



const obj1 ={1:'a',2:'b'}
const obj2 ={3:'c',4:'d'}
const obj4 ={7:'e',8:'f'}

const obj3 =Object.assign({},obj1,obj2,obj4) // so here in object we use assign as we use 
console.log(obj3)

const obj5={...obj1,...obj2}
console.log(obj5)



const user=[
    {
    id:1,
    email:'ojfgjsojf3@gmail.com',
     },
    
     {
        id:2,
        email:'ojfgjsojf3@gmail.com',
         },
    {
    id:3,
    email:'ojfgjsojf3@gmail.com',
     },
]

console.log(user[0].email)

console.log(Object.keys(mytinder))
console.log(Object.values(mytinder))
console.log(Object.entries(mytinder))



console.log(mytinder.hasOwnProperty('isloggedIn')) // has its property\\





const course ={
    coursename: "dsfisdjbf",
    price:"7845",
    courseInstructor:'he,amt'
}


//destructure
const {courseInstructor:instructor} =course

console.log(instructor)

