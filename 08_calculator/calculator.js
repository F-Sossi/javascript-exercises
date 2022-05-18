const add = function(a,b) {
  return Number(a) + Number(b);
};

const subtract = function(a,b) {
	return Number(a) - Number(b);
};

const sum = function(arr) {
  let temp = 0;
	for (let i = 0; i < arr.length; i++){
    temp += arr[i];
  }
  return temp;
};

const multiply = function(arr) {

  if(arr){
    let temp = 1;
    for(let i = 0; i < arr.length; i++){
      temp *= arr[i];
    }

    return temp;

  }else{
    return;
  }

};

const power = function(a,b) {
  let num = Number(a);
  let pwr = Number(b);
  let temp = 1;

  for(let i = 0; i < pwr; i++){
    temp = temp * num;
  }

  return temp;
	
};

const factorial = function(n) {
	if (Number(n) === 0){
    return 1;
  }else{
    return Number(n) * factorial(n - 1)
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
