export {addition, subtract, multiply, divide}

const addition = function(num1, num2) {
  return num1 + num2;
	
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
  let finalSum = 0;
  let len = array.length;
  
  for (let i = 0; i < len; i++) {
    finalSum += array[i]
  }

  return finalSum;
	
};

const multiply = function(...args) {

  let finalProduct = 1;
  let len = args.length;

  for (let i = 0; i < len; i++) {
    finalProduct *= args[i]
  }
  return Number(finalProduct.toFixed(14))
};

const power = function(base, exponent) {
	return Math.pow(base, exponent)
};

const factorial = function(num) {

  let answer = 1;
  
  if (num == 0 || num == 1) return answer;

  for (let i = num; i > 0; i--) {
    answer *= i
  }
  
  return answer;
	
};

const divide = (dividend, divisor) => {
  let answer = dividend / divisor; 
  return Number(answer.toFixed(14));
}

// Do not edit below this line
