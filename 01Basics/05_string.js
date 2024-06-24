const name ="heamtn-goy"
const repocount =20


console.log(`hello my name is ${name} and my repository counnt is ${repocount}`);



const gameName  = new String("hemant")

console.log(gameName[0])
console.log(gameName.__proto__)

console.log(gameName.toUpperCase)
console.log(gameName.charAt(2))

console.log(gameName.indexOf('ma'))


const newstring = gameName.substring(0,4)
console.log(newstring);


let text1='hemant'
let text2='goyal'
let text3 =text1.concat(" and my last name is ",text2)
console.log(text3)


let padstirng ='5'
let padded = padstirng.padStart(5,"3")
console.log(padded)

// there is padend
// there is replace 
// there is replace aall

// there is split


const anotherString =gameName.slice(-8,7)
console.log(anotherString)


// if extra space is there

const newstringone ="     hemant "
console.log(newstringone)
console.log(newstringone.trim())


const url ="https://hemant.com/hemant20%.com"

console.log(url.replace('20%',"new"))
console.log(url.includes('hemant'))


let forsplit=gameName.split('m')
console.log(typeof forsplit)

console.log(gameName.split("m"));