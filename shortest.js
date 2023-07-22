// an empty file with extension .js is the shortest js program
// you can check this in console
// here there is nothing to execute but there GEC in it
// it can be checked by consoleing window in console
// A global object is created
// window === this
// this points to global object

// space where Any code or variables which is not inside a function is called global space
// Eg

var a =0;
function s(){
    var d = 3;
    function f(){

    }
}
// here a and func s are in global space
console.log(window.a===a) //=>true
console.log(this.a===a) //=>true