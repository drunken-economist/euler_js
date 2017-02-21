console.log("foo");

function specialPy(sum){
	for(a=1; a<sum; a++){
		for(b=1; b<sum; b++){
			c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
			if (a + b + c == 1000){
				return a*b*c;
			}
		}
	}
}

