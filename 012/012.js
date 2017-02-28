function getNumFactors(dividend){
	var divisors = 2;
	for(i = 2; i < Math.sqrt(dividend); i++){
		if (dividend % i == 0){
			divisors++;
		}
	}
	return divisors;
}


function triangleWithFactors(numFactors){
	if(numFactors == 1){
		return 1;
	}
	if(numFactors < 0 || numFactors % 1 != 0){
		return "knock it off";
	}
	var thisNum = 2;
	var triangleSum = 1;
	var max = 0;
	while (true){
		triangleSum += thisNum;
		var howMany = getNumFactors(triangleSum);
		if(howMany > max){
			max = howMany;
			console.log(howMany);
		}
		if (howMany > numFactors){
			return triangleSum;
		}
		thisNum++;
	}
}
