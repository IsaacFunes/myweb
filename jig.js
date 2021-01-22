var clunkCounter = 0;

function clunk(times) {
	var num = times;
	while (num > 0) {
		display("clunk");
		num = num - 1;
    }
}
function thingamajig(size) {
	var facky = 1;
	clunkCounter = 0;
	if (size == 0) {
		display("clank");
	} else if (size == 1) {
		display("thunk");
	} else {
		while (size > 1) {
			facky = facky * size;
			size = size - 1;
		}
		clunk(facky);
	}
}
function display(output) {
	console.log(output);
	document.write(output);
	clunkCounter = clunkCounter + 1;
}

if (clunkCounter == 0){
	if(thingamajig > 7) {
		console.log(clunkCounter);
	    document.write(clunkCounter);
	} else {
		document.write("Uh-oh, something went wrong");
    }
}


/*thingamajig(0);
console.log(clunkCounter);
document.write(clunkCounter);

clunkCounter = 0;
thingamajig(1);
console.log(clunkCounter);
document.write(clunkCounter);

clunkCounter = 0;
thingamajig(2);
console.log(clunkCounter);
document.write(clunkCounter);

clunkCounter = 0;
thingamajig(3);
console.log(clunkCounter);
document.write(clunkCounter);

clunkCounter = 0;
thingamajig(4);
console.log(clunkCounter);
document.write(clunkCounter);

clunkCounter = 0;
thingamajig(5);
console.log(clunkCounter);
document.write(clunkCounter);

clunkCounter = 0;
thingamajig(6);
console.log(clunkCounter);
document.write(clunkCounter);

clunkCounter = 0;
thingamajig(7);
console.log(clunkCounter);
document.write(clunkCounter);