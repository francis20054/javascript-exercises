const reverseString = function(cadena) {
 let cadenarevertida = "";
 for(let i = cadena.length - 1; i >= 0; i--){
    cadenarevertida += cadena[i];
 }
 return cadenarevertida

};

// Do not edit below this line
module.exports = reverseString;
