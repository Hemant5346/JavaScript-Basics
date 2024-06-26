const coding =['js','ruby','java','python']

const values =coding.forEach((item) =>{
    console.log(item)
})


console.log(values)

// here it will return undefined 



/// here filter is used 
const mynums =[1,2,3,4,5,6,7]
// let newnums =mynums.filter((num)=> num>4)
// console.log(newnums)



const newnums=[]

mynums.forEach((num)=> {
    if(num>4){
        newnums.push(num)
    }
})

console.log(newnums);








