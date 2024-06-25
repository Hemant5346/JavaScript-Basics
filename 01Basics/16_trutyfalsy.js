const username=[]

if (username){
    console.log("got user name")
}else{
    console.log('dont have user email')
}

// falsy values 

// false ,0, -0,bigint,0n,"",null,undefined,NaN


// truthy values

//"0", "false" , " ",[],{},fucntion(){}


const username1 =[]

if (username1.length ===0){
    console.log(`username length is empty`)
}

const emptyobj={}

if (Object.keys(emptyobj).length ===0){
    console.log('object is empty')
}


// nullish coalescing Operator (??) : null undefiend 

let val1;
// val1 = 5??10
// val1=null ??10
// val1 = undefined ?? 15

val1 =null ?? 10 ?? 20

console.log(val1);


// ternairy operator.  // if else small 

///condtion ? true :false

const iceteaprice=100
iceteaprice>=80 ? console.log('less than 80') : console.log('more than 80')


