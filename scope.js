// scope is the place where we can access specific variable or functions in our code
// 2 ways we look at scope is
    // 1.what is the scope of varible or function
    // 2.is variable is scope of a function
// scope of variable is related to lexical enviroment

// lexical environment
// ======================
// => Whenever a EC is created, a lexical environment is also created
// => So lexical environment is the local memory along with its lexical enviroment of its parent

// Eg
var data = 10;
function a(){
    console.log(data) //10
    console.log(new1) // not defined
    b()
    function b(){
        var new1 = 40;
        console.log(data) //10
        c()
        function c(){
            var newdata = 90;
            console.log(data) //10
        }
    }
}
a()
console.log(newdata) //=>not defined

// Here c() is lexically inside b()
// b() is lexically inside a()
// a() is lexically inside global scope

// So whenever a EC is created its also contain a refrence of its parent (lexical environment) or in it 
// Thats why we get 10 inside every function because 10 is in global scope
// if variable is inside b() and we try to access it in a() it will be not defined beacause a() is not in scope of b()
// this chaining is called scope chain
// here lexical environment of c() is local memory of c() and lexical environ of b() => so c() has access to every above its scope