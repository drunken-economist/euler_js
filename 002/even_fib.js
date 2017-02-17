function even_fibonacci(maximum){
	var lastTerm = 1;
	var thisTerm = 1;
	var sum = 0;
	while (thisTerm < maximum){
		temp = thisTerm;
		thisTerm += lastTerm;
		if (thisTerm % 2 == 0){
			sum += thisTerm;
		}
		lastTerm = temp;
	}
	return sum;
}
