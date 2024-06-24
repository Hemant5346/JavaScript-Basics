// // function sumn2numbers(number1,number2){
// //     console.log(number1+number2)
// // }
// // const result =sumn2numbers(2,5)
// // console.log(result)


// function sumn2numbers(number1,number2){
//     let result =number1+number2
//     return result
// }

// const result =sumn2numbers(2,5)
// console.log(result)


function loginusername(username = "sam"){
    if(!username){
        console.log('please enter tthe username ')
        return
    }
    return `${username} justt logged in`
}

console.log(loginusername('hem,ant'))


function addsommecartvalue(val1,val2,...num1){
    return num1

}
console.log(addsommecartvalue(23,234,2,4,1,41)) //here ... is used to assign some left values 

