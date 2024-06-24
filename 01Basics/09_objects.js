// onbject
const mysum1 =Symbol('key-1')
const Jsuser={
    name: 'hemant goyal',
    'fullname':"hemant goual",
    mysum:'key-num1',
    [mysum1]:'key-num2',
    age: 18,
    location:'jaipur',
    email:'goyalkhemanr5346@gmail.com',
    isloggedin:false,
}

console.log(Jsuser.name)
console.log(Jsuser["email"])
console.log(Jsuser['fullname'])
console.log(typeof Jsuser.mysum)

Jsuser.name="nfisufhiuj"
Object.freeze(Jsuser)

Jsuser.email='saknfdisdfi2'
console.log(Jsuser)




