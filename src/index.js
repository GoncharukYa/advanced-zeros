module.exports = function getZerosCount(number, base) {
  let baseFactorsMap = countSimpleFactors(getSimpleFactors(base));
  let numberFactorsMap = countFactorInFactorial(baseFactorsMap, number);
  return getZeros(numberFactorsMap, baseFactorsMap);

  function getSimpleFactors(number) {
    let simpleFactors = [];
    for (let i = 2;i <= Math.floor(Math.sqrt(number));i++) {
      while (number%i == 0) {
        simpleFactors.push(i);
        number = Math.floor(number/i);
      }
    }
    if (number != 1) { 
      simpleFactors.push(number);    
    }
    return simpleFactors;
  }

  function countSimpleFactors(simpleFactors) {
    let factorsMap = {};
    for (let i=0;i < simpleFactors.length;i++) {
      if (factorsMap.hasOwnProperty(simpleFactors[i])) {
        factorsMap[simpleFactors[i]]++;
      } else {
        factorsMap[simpleFactors[i]] = 1;
      }
    }
    return factorsMap;
  }

function countFactorInFactorial(factorsMap, factorial){
  let factorialMap = {};
  for (let factor in factorsMap) {
    factorialMap[factor] = 0;
    for (let i = 1; Math.pow(factor, i) < factorial; i++) {
      factorialMap[factor] += Math.floor(factorial/Math.pow(factor, i));
    }
  }
  return factorialMap;
}

function getZeros(factorialMap, baseFactorsMap) {
  let tempArr = [];
  for (let factor in factorialMap) {
    tempArr.push(Math.floor( factorialMap[factor] / baseFactorsMap[factor] ) );
  }
return Math.min(...tempArr);
}

  
}