// const descripteor = Object.getOwnPropertyDescriptor(Math,"PI")

// console.log(descripteor)


// // console.log(Math.PI)

// Math.pi=5
// console.log(Math.PI)


const think = {
    name:'Ai',
    price: 250,
    isAvailable:true,
    orderchai: function(){
        console.log("chai is orderes")
    }


}

const descripteor = Object.getOwnPropertyDescriptor(think,"name")



// Object.defineProperty(think,"name",{
//     writable:false,
//     enumerable:false
// })
// console.log(Object.getOwnPropertyDescriptor(think,"name"))



for (const [key,value] of Object.entries(think)){
    if (typeof value!=="function"){
        console.log(`${key},${value}`)

    }

    
}



const randomdes= Object.getOwnPropertyDescriptor(Math,"random")
console.log(randomdes)