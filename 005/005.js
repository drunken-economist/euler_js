function checkNum(number, max){
	for (i=1;i<=max;i++){
		if (number % i != 0){
			return false;
		}
	}
	return true;
}

function lcm(max){
	var i=1;
	while (true){
		if (checkNum(i, max)){
			return i;
		}
		i++;
	}
}
