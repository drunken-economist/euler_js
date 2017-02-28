function sumPrimes(limit){
	var currentSum = 2;
	for (i=3; i<limit; i=i+2){
		if (isPrime(i)){
			currentSum += i;
		}
	}
	return currentSum;
}

function isPrime(num){
	if (num == 2){
		return true;
	}
	if (num % 2 == 0){
		return false;
	}
	for (k = 3; k <= Math.sqrt(num); k = k+2){
		if (num % k == 0){
			return false;
		}
	}
	return true;
}
