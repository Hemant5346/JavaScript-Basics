if (true){
    const username = "hemant"
    if (username==="hemant"){
        const website= " yuotueb"
        console.log(username + website)

    }
}

// this curly braces is a scope adn the there are two types of scope local and global
//global is outside the curly braces and inside is the local scope

///++++++++++++++++++++Interesting+++++++++

function addone(num){
    return num+1

}

addone(5)

const addtwo=function(num){
    return num +2
}

addtwo(5)

//these are the two different representation fo funmction in which we have declared itas a constant so we cant access it before like if we add sumtwo before the declearation then it will be a problem