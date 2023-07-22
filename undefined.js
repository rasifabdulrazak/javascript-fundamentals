if(t===undefined){
    console.log("undefined")
}
else{
    console.log("something")
}

console.log(x) //=>undefined
var x = 10;
console.log(x) //=>10
var t;
console.log(t) //=>undefined

if(x===undefined){
    console.log("undefined")
}
else{
    console.log("something")
}
t='hhh'
console.log(t)

// MCP=> Memory Creation Phase

// undefined is like a placeholder which takes its own memory to variable until the variable is assigned to a value
// because we know in MCP the memory is created for each and every varaible and functions.
// not defined is error occured if we try to access variable which is not even declared or defined in program
// JS is a loosely type language .no need of defining datatype while variable declaration

// never do this
var r = undefined
// its not a good standard
// undefined is a special keywork\d or placeholder dont make it manually assign in code