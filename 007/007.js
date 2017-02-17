function isPrime(n){
	if (n==2){
		return true;
	}
	if (n % 2 == 0){
		return false;
	}
	for (i=3; i <= Math.sqrt(n); i=i+2){
		if (n%i == 0){
			return false;
		}
	}
	return true;
}

function findPrime(maximum){
	var thisNum = 3;
	var primeNum = 1;
	while (primeNum <= maximum){
		if (isPrime(thisNum)){
			primeNum += 1;
		}
		thisNum += 2;
	}
	return thisNum - 2;
}

