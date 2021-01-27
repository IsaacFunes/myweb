var clunkCounter = 0;
var x = 7;
// The clunk function is pretty simple. it takes the argument passed down from the other function, facky, and
// uses it as a counter. This counter is used to display clunk as many times as was defined when facky was created
// in the last function.
function clunk(times) {
	var num = times;
	while (num > 0) {
		display("clunk");
		num = num - 1
	}
}

// The thingAMaJig works like this. First, it defines two variables in the local area, facky, and clunkCounter. 
// Then, it makes a decision with an if, else if, and else statement. If size is zero, then it just says clank once.
// Same for if the size equals one, only it says thunk once. When above one, things get tricky. It uses facky, the 
// variable described in the beginning of the function, by multiplying it with the argument we passed in, and then
// subtracting our argument by one. After, it puts the facky variable through the clunk function. 

function thingamajig(size) {
	var facky = 1;
	clunkCounter = 0;
	if (size == 0) 
	{
		display("clank");
	} 
	else if (size == 1) 
	{
		display("thunk");
	} 
	else 
	{
		while (size > 1) 
		{
			facky = facky * size;
			size = size - 1;
		}
		clunk(facky);
	}
}
// This is used to display the amount of times the thingAMaJig clunked.

function display(output) {
	console.log(output);
	document.write(output);
	document.write("<br>");
	clunkCounter = clunkCounter + 1;
}

while (x >=0) {
	thingamajig(x);
	x -= 1;
	console.log(clunkCounter);
	document.write(clunkCounter);
	document.write("<br>");
}


