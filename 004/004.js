function foo(){
	console.log("foo");
};

function checkPalindrome(number){
	var numString = number.toString()
	if (numString == numString.split("").reverse().join("")){
		return true;
	}
	return false;
};

function largestPalindrome(){
	var max = 0;
	var product = 0;
	for (i=100;i<=999;i++){
		for (j=i;j<=999;j++){
			product = i * j;
			if (checkPalindrome(product) && product > max){
				max = product;
			}
		}
	}
	return max;
};
