function multiples(maximum){
	var sum = 0;
	for (i = 1; i < maximum; i++){
		if (i % 3 == 0 || i % 5 == 0){
			sum += i;
		}
	}
	return sum;
}
