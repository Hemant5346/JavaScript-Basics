const mynumds=[1,2,3,4]



const total =mynumds.reduce(function(acc,currval) {
    console.log(`acc:${acc} and currval ${currval}`);
    return acc+currval
},0 /* here this 0 is the assignment for the  accumulator*/ )

console.log(total)



const myshoppinglist=[
    {
        itemname: "datascien",
        price:1000
    },
    {
        itemname: "c++",
        price: 299

    },
    {
        itemname:'golanf',
        price:10000
    }
]

const pricetopay=myshoppinglist.reduce((acc,item) => acc +item.price,0)

console.log(pricetopay)