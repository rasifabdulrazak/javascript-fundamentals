// Closure
// ===========
// =>Closure is a function which binds together with its lexical environment
// =>function along with its lexical scope forms a closure
// =>A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

function z() {
    var d = 90;
  function x() {
    var a = 30;
    function y() {
      console.log(a,d);
    }
    y()
    return y
  }
  x()
  return x;
}
var k = z();
k()

// here if we return x from z ,the execution context is cleared right?
// but wherever we call z() we can still access the variables in it because of closure
// it will remember its scope.

// uses of closure
// =====================
// 1. Module design pattern
// 2. currying
// 3. functions called once
// 4. memoize
// 5. maintain state in async world
// 6. setTimeouts
// 7. iterators
// 8. etc...
