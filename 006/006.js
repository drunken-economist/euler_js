function squareOfSums(max){
	var sum = 0;
	var squareSum = 0;
	for (i=1; i<=max; i++){
		sum += i;
		squareSum += Math.pow(i, 2);
	}
	return Math.pow(sum, 2) - squareSum;
}
