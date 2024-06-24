//singleton object (The Singleton Pattern ensures that a class can only have a single instance throughout the lifetime of an application. By restricting the instantiation of a class to one object, you can ensure that shared resources or data are managed consistently across different parts of your application.)

const myTinder = new Object()
console.log(myTinder)

const mytinder={} //this is non singleton object
console.log(mytinder)