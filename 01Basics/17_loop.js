

// for (let index=0 ; index < 10; index++){
//     const element = index
//     if (element ==5){
//         console.log('5 is best number')

//     }

//     console.log(element);
// }


// for (let index=0 ; index < 10; index++){
//     const element = index
//     if (element ==5){
//         console.log('5 is best number')

//     }

//     console.log(element);
// }



for(let i=1; i<10;i++){
    console.log(`outeer loop ${i}`);
    for (let j=1;j<=10;j++){
        console.log(i + "*" +  j + '=' + i *j);
    }
}


let myarray =['flash','batman','superman']

for( let index=0;index<myarray.length;index++){
    const element=myarray[index];
    console.log(element);
}




// break and continue 

for (let index=0; index<=10;index++){
    if (index ==5){
        console.log('dectected 5')
        break // break with bbe like it will make it out of scope

    }
    console.log(`value of i is ${index}`)
}



for (let index=0; index<=10;index++){
    if (index ==5){
        console.log('dectected 5')
        continue  // continue is something that will continue 

    }
    console.log(`value of i is ${index}`)
}

