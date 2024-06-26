const mynumbers =[1,2,4,5,6,3,2]


// const newnums = mynumbers.map((num)=>{return num+10})


// this is called chaining

const newnums = mynumbers.map((num) => num *10).map((num) => num+1).filter((num) => num >=40)

console.log(newnums)



