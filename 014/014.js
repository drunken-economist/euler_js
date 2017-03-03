function collatzLen(startNum, iter){
	iter++;
	if (startNum == 1){
		return iter;
	}
	if (startNum % 2 == 0){
		return collatzLen(startNum/2, iter);
	}
	if (startNum % 2 == 1){
		return collatzLen(3*startNum + 1, iter);
	}
}

function maxCollatz(stop){
	var maxLen = 0;
	var maxNum = 0;
	for (i=1; i<=stop; i++){
		var thisLen = collatzLen(i, 0);
		if (thisLen > maxLen){
			maxLen = thisLen;
			maxNum = i;
			console.log(maxLen, maxNum);
		}
	}
	return maxNum;
}
