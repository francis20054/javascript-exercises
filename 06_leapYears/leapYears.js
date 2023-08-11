const leapYears = function (years) {
  let startYear = parseInt(prompt("Ingresa el año de inicio:"));
  let endYear = parseInt(prompt("Ingresa el año final"));

  console.log(`Años bisiestos entre ${startYear} y ${endYear}`);
  for (let year = startYear; years <= endYear; year++) {
    if (leapYears) {
      console.log(years);
    }
  }
  if ((years % 4 === 0 && years % 100 !== 0) || years % 400 === 0) {
    return true;
  } else {
    return false;
  }
};
// Do not edit below this line
module.exports = leapYears;
