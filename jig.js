var clunkCounter = 0;
var x = 7;
 
/*
This Function is used for the variable that was passed to the thingamajig, this acts a counter which is used to display the string clunk
as many times as we defined it.
*/
function clunk(times) {
	var num = times;
	while (num > 0) {
		display("clunk");
		num = num - 1
	}
}
 
/*
The actual mechinations of the thingamajig are hard to clarify. The clunkCounter resets to 0 every time thingamajig is 
called because display (which thingamajig calls) modifies the counter. The size of the argument passed within the function
is either a display of thunk or clunk, the decision statement will make this call. If thunk is called from the size being 1, then
the variable facky is called which will be displayed on the console. However, if the size is over one then the facky variable 
will be multiplied by the argument passed and then will subtract one from the argument. Clunk will be called once again with the facky's
variable output. Initially all its doing is taking our passed variable and initalizing it to a new one and it will make a decision, and based
on that decision, a display will be sent to the console or the web page.
*/
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

//This is the passed display that will be sent to the output.
function display(output) {
	console.log(output);
	document.write(output);
	document.write("<br>");
	clunkCounter = clunkCounter + 1;
}

/* This loop calls the thingamajig and uses the defined varaibale (x) and will pass the number of times we assigned it (7) and will 
display the clunkCounter, the variable defined above. */
while (x >=0) {
	thingamajig(x);
	x -= 1;
	console.log(clunkCounter);
	document.write(clunkCounter);
	document.write("<br>");
}