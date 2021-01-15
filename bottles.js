var word = "bottles";
		var count = 99;
		while(count > 0) {
		    console.log(count + " " + word + " of pop on the wall");
			document.write(count + " " + word + " of pop on the wall,");
			document.write("<br>");
			console.log(count + " " + word + " of pop, ");
			document.write(count + " " + word + " of pop, ");
			document.write("<br>");
			console.log("Take one down, pass it around, ");
			document.write("Take one down, pass it around, ");
			document.write("<br>");
			count = count - 1;
			
			if (count > 0) {
				document.write(count + " " + word +" of pop on the wall. ");
				document.write("<br>");
				console.log(count + " " + word +" of pop on the wall. ");
			}
			else
			{
				console.log("No more " + word + " of pop on the wall.");
				document.write("No more " + word + " of pop on the wall.");
			}
		}
		