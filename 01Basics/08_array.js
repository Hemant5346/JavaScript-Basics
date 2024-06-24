//array 

const myArr = [23,45,7,3,6,3,6]
const myheros = ["shaktiman","bdfsdbjf"]

const myarr2 = new Array(23,5,2,6,2,5)

console.log(myArr[0]);
console.log(myarr2[0]);

console.log(myArr.includes(9))
//array always make shallow and deep copy 

myArr.push(3)
myarr2.pop()

myArr.unshift(9) //add at the front of the array
myArr.shift() // remove the added one 
console.log(myArr)



const newarr =myArr.join() // join will convert it into string
console.log(newarr)
console.log(typeof newarr)



/// here we will see the slice and splice 


const myn1 = myArr.slice(1,3)
console.log(myn1)

const myn2 =myArr.splice(1,3)
console.log(myn2)  // the basic difference is that it will include the last index memeber 



const marvel_heroes = ['thor',"ironmanr",'spderman']
const dc_heroes =['superman','flash','batman']

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes)

const allheores = marvel_heroes.concat(dc_heroes)
console.log(allheores);


const anotherarray =[1,2,3,[4,5,6],7,[3,32,5,[3,1]]]

const real_another_array =anotherarray.flat(Infinity)
console.log(real_another_array)


console.log(Array.isArray("hemant"))
console.log(Array.from("hemant"))//from will convert string to array

console.log(Array.from({name:"hemant"}))

const score1=100
const score2=200
const score3=500

console.log(Array.of(score1,score2,score3))