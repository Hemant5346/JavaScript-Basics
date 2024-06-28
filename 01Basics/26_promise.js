const onePromise = new Promise(function(resolve,reject){
    //do async task
    // crypto call
    //network calls
    setTimeout(function(){
        console.log('Async taskk is complseter')
        resolve()
    },1000)
})

onePromise.then(function(){
    console.log('promise consumed')
})


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task two")
        resolve()
    },1000)
}).then(function(){
    console.log('assysnc 2 completed')
})



const promisethree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:'tech',email:'goyalhemant@hgmail.com'})

    },1000)
})

promisethree.then(function(data){
    console.log(data)

})


const promisefour =new Promise(function(resolve,reject){
    setTimeout(function(){
        let error =false
        if (!error){
            resolve({username:'tech',email:'fbdsifbsi'})
        }else {
            reject('error: something wentwrong')
        }
    },1000)
})

promisefour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username)
}).catch(function(error){
    console.log(error)
}).finally(()=> console.log('the promise is either resolve or rejected'))


const promisefive =new Promise(function(resolve,reject){
    setTimeout(function(){
        let error =false
        if (!error){
            resolve({username:'java',email:'jav@gmail.comi'})
        }else {
            reject('error: something wentwrong')
        }
    },1000)
})

async function consumepromisefive(){
    try {
      const response = await promisefive
      console.log(response)
    } catch (error) {
        console.log(error);
    }
}
consumepromisefive()



// async function getalluser(){
//    try {
//     const response =await fetch('https://jsonplaceholder.typicode.com/users')
//     const data =await response.json()
//     console.log(data);
//    } catch (error) {
//      console.log('E:',error)
//    }
   
// }

// getalluser()




fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data)
}).catch((error)=>{
    console.log(error)
})


