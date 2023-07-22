// in Js we can access the varibables and normal functions before we initialize it without error

// eg
console.log(x)
console.log(Fname)
Fname()

var x = 10
function Fname(){
    console.log("name console")
    return "done"
}


// in this we didint get error it will be
    // undefine
    // function Fname(){
    //     console.log("name console")
    //     return "done"
    // }
    // name console

// MCP=Memory Creation Phase
// CEP=Code Execution phase

// This happens because of the memory creation phase in js
// In MCP the special keywod undefined is stored to x and Fname func has the exact code itself
// so it will not throw an error to us in CEP when we run
// refer basic.js
// we also can see this in our console Sources by debbugging

// but when we try to call a variable which is not defined anywhere it will throw error
// Eg
var t = 10
console.log(r)
// this will through =>Uncaught ReferenceError: r is not defined

// Also in case of arrow function also this not work
// Eg
console.log(newFunc)
const newFun=()=>console.log("ooo")
// this will throw =>Uncaught ReferenceError: newFunc is not defined


