// for of loop 


// ['','','']
// [{},{},{}]


const arr =[1,2,3,4,5]

for (const val of arr) {
    console.log(val);
    
}


const greetings ='hello worl'
for (const gretting of greetings) {
    console.log(gretting)
    
}


//maps. holds key value pair.      // map is only for uniqe values 


const map =new Map()

map.set('In',"india")
map.set('Us',"usa")

console.log(map)


for (const key of map) {
    console.log(key)
    
}

for (const [key,value] of map) {
    console.log(key,"-",value)
}




// my object is not iterable in forof loop 

const myobject={
    game1:'spiderman',
    game2:'nfs'
}
for (const [key,value] of myobject) {
    console.log(key,value)
    
}
// for this opbject is not iterable
