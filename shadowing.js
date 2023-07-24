// Block(compound statements)
// =============
// => anything written inside a curly braces({..}) is block
// => Used to group multiple statements to 1 grouped statement
// Eg
{
    console.log("block")
}

{
    var a=10;
    let b=20;
    const c=30;
    console.log(a);//10
    console.log(b);//20
    console.log(c);//30
}
console.log(a);//10
console.log(b);//error=>Uncaught ReferenceError: b is not defined
console.log(c);//error=>Uncaught ReferenceError: c is not defined

// let and const are block scope
// they can be access only inside the declared block
// let and const are hoisted in a seperate memory space which is reserved for that scope
// only var can be access globally

// Shadowing
// ===============
// =>If we have same Variables outside as well as inside the block. The variable inside the block shadows the outer variables
// => But Not in case of let or const due to lexical scopping

var f = 90;
let r = 45;
const w = 22;
{
    var f=80;
    let r = 35;
    const w = 87
    console.log(f) //80
    console.log(r) //35
    console.log(w) //87
}
console.log(f) //80
console.log(r) //45
console.log(w) //22
// here in var variable the f has same memory space in both lines, so it modifies in 2nd time, so it will console 80,its called shadowing
// in let and const here varaible in both have a seperate memory space, so they not change value in there scope
// block scope also follows lexical scope
// each and every scope has its own lexical environment