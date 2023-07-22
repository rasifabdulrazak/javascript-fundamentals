// functions are the heart of javascript

var x = 1;
a();
b();
console.log(x)

function a(){
    var x = 10;
    console.log(x)
}

function b(){
    var x = 20;
    console.log(x)
}

// output
// 10
// 20
// 1

// while runnign a EC is created p1:x(undefined)=>p2:x(1)
// whenever a() is invoked new EC is created inside the stack p1:x(undefined)=>p2:x(10) console(x) here it will check for the x in EC and 10 will be consoled and EC is poped from callstack
// when b() is invoked new EC created inside stack p1:x(undefined)=>p2:x(20) console(x) here will check for x in EC and 10 will be consoled and EC is poped from callstack
// last console will check x in its EC so it will be 1