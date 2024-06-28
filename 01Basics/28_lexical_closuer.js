function outer(){
    const username ="hemnat"
    console.log(secret);
    function innerone(){
        const secret="123"
        console.log("innerone",username)

    }
    function innertwo(){
        console.log("inner two",username);
    }
    innerone()
    innertwo()
}


outer()



// so it like the parent function varaible can be used by children function but children variable cannot be used bt parent 
// and children eacother cannot share their variable


