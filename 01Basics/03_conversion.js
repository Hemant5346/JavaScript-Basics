let score = "33"


//sometimes happend llike it doesnt convert it into a number so please check 
console.log(typeof score);
console.log(typeof(score));


let valueIsNumber = Number(score);
console.log(typeof valueIsNumber);
console.log(valueIsNumber);


// "33" ==> 33
// "33abc' ==> nan
// true =>1 ; flase=0


let isloggedin ="hemant"

let booleanIsloggedIn = Boolean(isloggedin)

console.log(booleanIsloggedIn)

// for boolean 
// 1 +> true ; 0 => false
// "" => false 
// "hemant" => true


let someNumber =33

let stringnumber = String(someNumber)

console.log(stringnumber);

console.log(typeof stringnumber);



/* ********************* Operations */


let value=3;
let negvalue = -value
console.log(negvalue);


console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2);
console.log(2/2);
console.log(2%2);



let str1="hemant"
let str2="goyal"

let str3= str1+str2

console.log(str3)


console.log("1"+1)
console.log(1+"1")

console.log("1" +2 +2)
console.log(2+2+"1") // if the int is used before then it will automatically convert it into and add itself


console.log(+true);

console.log(+"");


let gamecounter=100
gamecounter++;
console.log(gamecounter)


// post fix and prefix


let x=3;
// const y =x++;
// console.log( `x:${x} , y:${y}`)

const z = ++x;
console.log( `x:${x} , z:${z}`)
