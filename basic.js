// Working of js
// =============
//=> Javascript is a synchronous single threaded langauge
//=> Everything in javascript happens inside execution context
// => Everything is working inside the callstack
//=> Execution context has 2 parts 
    // =>1.Memory Component(varaible envronment :key:value pair)
    //  =>2.Code component(thread of execution : run 1 line at a time)

// Lets look how execution context works behind scene
var n = 2;
function square(num){
    var ans = num * num
    return ans;
}
var square2 = square(n)
var square4 = square(4)

// EC=execution context
// when we run this the EC is created.
// There are 2 phases when running a js
    // 1.Memory creation phase
    // 2.Code Execution phase

// Phase 1
// ==========
// in 1st phase it store value to n(undefined),square(exact code of fun),square2(undefine),square3(undefined)
// undefined is a special keyword or placeholder in js

// phase 2
// ===========
// in 2nd phase it store given value to variables n(2),
// when square2 is called a function is invoked 
// so in js whenever a function is invoked ,A brand new EC is created inside callstack
// it also have same like this EC,so it also have 2 phases as above, p1:num(undefined)=>p2:num(2), p1:ans(undefined)=>p2:ans(2*2=4)
// whenever a return is called it return the EC where it is called, now square2(4)
// after whole function is executed the EC for that will be deleted ,in here the 2nd EC is now deleted 
// again in square4 this hapens and now square4(16)
// after all code executed the entire EC is get gone from callstack

// callstack (its for managing EC,it folows stack data structure which is LIFO)
// ==========
// =>call stack maintain the order of execution of EC
// =>also known as [Execution Contxt Stack ,Program stack ,Controll stack, Runtime stack, Machine stack]

// |        |
// |        |
// |   EC   |
// | ...... |
// |  EC    |
// |........|

