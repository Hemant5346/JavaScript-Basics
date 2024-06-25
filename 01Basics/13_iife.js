// Immediately Invoked Function Expression (IIFe)

// the polluation that accur due to the global scope to remove that we use iife


(function tech(){
    // this is name iife
    console.log('db connected')

})();
//here this semicolon is important because after this function will be invoked only if this semicolon is there

((name)=>{
    console.log(`Db connected two ${name}`)
})('hemant')