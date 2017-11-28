function outer() {
	var x = 2;
	console.log(x);
	inner();
}
outer();


function inner(x) {
	var y;
	console.log(x + x);
	console.log(y + y)
}

