// let and const are hoisted,not directly but in temporal deadzone
// let and const are not an window object .we cannot acces it in window

console.log(a) //error but hoisted
console.log(f) //error but hoisted 
console.log(d) //undefined 
let a = 9 
const f = 8;
var d = 5;

// Here in memory allocation phase its store value of a as undefined other than in global object
// in case of var it is stored in global object and we can acces with undefined value in it
// in let and const the value is stored undefined but in diffrnet scope so when we try to access a here we get error
// error => Uncaught ReferenceError: Cannot access 'a' before initialization

// Temporal dead zone
// ===================
// => Temporal dead zone is the time since when the let and const variable are hoisted and till it is assinged some value to it
// here the time since assign 9 to a and 8 to f is the phase of temporal deadzone
// its because of this we getting a diffrent refrence error.otherwise if it was not in memory we should get not define error

// var
// ===========
// 1.var can be reassigned with another value
// 2.The scope of var depends on where it's declared.
// eg
var myVariable = "First value";
myVariable = "Second value";
// 3.You can declare multiple variable with the same name (or label)
// Eg
var redeclaredVar = 'First declaration';
var redeclaredVar = 'Second declaration';


// let
// ==========
// 1.you can reassign a variable declared with let
// Eg
let newmyVariable = "First value";
newmyVariable = "Second value";
// 2.A variable qualified with let will be block scoped (ie only be accessible inside the current closer parent curly bracket)
// Eg
function myDummyFunction() {
    if (true) {
      let mynewVariable = "A let variable";
    }
  
    console.log(mynewVariable);
  }
  myDummyFunction();
  
  // You will see in your console something like
  // Uncaught ReferenceError: myVariable is not defined
  

// 3.Cannot redefined a same label
// Eg
let myLetVariable = "First value";
let myLetVariable = "Second value";
// You will see in your console something like
// Uncaught SyntaxError: Identifier 'myLetVariable' has
// already been declared


// const
// ===============
// 1.With a variable declared with const, it's not possible to reassign this variable with another value
// Eg
// const myConstVariable = "First value";
// myConstVariable = "Second value";
// You will see in your console something like
// Uncaught TypeError: Assignment to constant variable
// 2.A variable declared with const is mutable
// Eg
const person = {};
person.firstName = "Romain";
console.log(person)
// Mutation is done here
// 3.You have to initialized a variable qualified with const, otherwise you will have a SyntaxError
// Eg
const uninitializedConst;
// You will see in your console something like
// Uncaught SyntaxError: Missing initializer in const declaration


// var has function scope when declared inside a function and global scope when outside. let and const has block scope.
// let variable can be reassigned contrary to const. But watch out, a variable declared with const is not immutable.
// All three are hoisted but var is initialized to undefined unlike let and const that are not.