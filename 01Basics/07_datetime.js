let d = new Date()
console.log(d.toString())
console.log(d.toDateString())
console.log(d.toLocaleString("en-IN"))

console.log(typeof d)


let mycreatedDate =new Date(2021,0,21)
console.log(mycreatedDate.toDateString())
console.log(mycreatedDate.toLocaleString())


let myTimeStamp = Date.now()

console.log(myTimeStamp)
console.log(mycreatedDate.getTime())


const newday = new Date()
console.log(newday.getFullYear())


console.log(newday.toLocaleString("default",{
    weekday: 'long',
    year:'numeric',
    minute: "numeric"
}))

