const ftoc = function(ftemp) {

let celTemp = (ftemp - 32) * 5/9;
let celTempRounded = Math.round(celTemp * 10) / 10;
return celTempRounded;

};

const ctof = function(ctemp) {
  
  let farTemp = ctemp * 9/5 + 32;
  let farTempRounded = Math.round(farTemp * 10) / 10;
  return farTempRounded;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
