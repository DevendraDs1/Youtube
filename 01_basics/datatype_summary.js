// Primitive

//  7 typess : String ,number ,Boolean , null ,undefined, Symbol,Bigint

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "Devendra",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

//  Refrence (non primitive)

//  Array , objects , Functions


// ******************************

// Primitive is ( Stack ) & Non Premiatives are (Heap)
 
let myName="Devendra"

let yourName =myName
yourName="disha"

console.log(myName);
console.log(yourName);


let user1={
    email:"dven@g,ail.com",
    age:22
}

let user2=user1
user2.email="sonwane@gmail.com"


console.log(user1.email);
console.log(user2.email);


