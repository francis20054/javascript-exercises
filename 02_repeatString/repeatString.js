const repeatString = function (string, num) {
   if(num < 0) return "ERROR";
  let repetidas = "";
  for (let i = 0; i < num; i++) {
    repetidas += string;
  }
  return repetidas
};

// Do not edit below this line
module.exports = repeatString;
