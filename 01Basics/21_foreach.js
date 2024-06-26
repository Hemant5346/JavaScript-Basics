const  myarray=['js','ruby','java']

// myarray.forEach(function (val){
//     console.log(val)
// })


myarray.forEach((item) =>{
    console.log(item)
})


function printme(item){
    console.log(item)
}

myarray.forEach(printme)



myarray.forEach((item,index,array)=>{
    console.log(item,index,array)
})



const mycoding=[
    {
        languagename:'python',
        languagefile:'py'
    },
    {
        languagename:'java',
        languagefile:'js'
    },
    {
        languagename:'golang',
        languagefile:'go'
    }
]

mycoding.forEach((item)=>{
    console.log(item.languagename)
})



