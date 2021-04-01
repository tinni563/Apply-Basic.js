// var i = 1;
// var factorial = 1;
// while (i <= 4){
    // factorial = factorial * i;
    // console.log(i, factorial);
    // i++;
// }
// console.log(factorial);


function factorial(n){
    var i = 1;
var factorial = 1;
while (i <= n){
    factorial = factorial * i;
    i++;
}
  return factorial;
}

var result = factorial(6);
console.log(result);