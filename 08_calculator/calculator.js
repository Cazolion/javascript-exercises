const add = function(a, b) {
  return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(array) {
	return array.reduce((total, currentValue) => {
    return total + currentValue
  }, 0);
};

const multiply = function(array) {
  return array.reduce((total, currentValue) => {
    return total * currentValue
  });
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(a) {
  if (a === 0) {
    return 1;
  }
  else {
    let fact = 1;
	  for (i = 1; i <= a; i++) {
    fact *= i;
  }
  return fact
}
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
