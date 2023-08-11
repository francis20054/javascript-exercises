const sumAll = function(start, end) {
    let suma = 0;
if(typeof start !== "number" || typeof end !== "number" || start < 0 || end < 0) {
    return "ERROR"
}
let min = start;
let max = end;
if(start > end){
    min = end;
    max = start
}
for(let i = min; i <= max; i++){
  suma += i;
}
return suma;
}
console.log(sumAll(123,1))

// Do not edit below this line
module.exports = sumAll;
