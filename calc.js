const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


//read in prefix operation
reader.question("What would you like to calculate?", function(input){
	tokens = input.split(' ');
	
	mathSymbol = tokens[0];
	num1 = Number(tokens[1]); 
	num2 = Number(tokens[2]);

//Calculate the input equation and print result to console
	if (mathSymbol == "+"){
		console.log(num1 + num2);
	} else if (mathSymbol == "-"){
		console.log(num1 - num2);
	} else if (mathSymbol == "/"){
		console.log(num1 / num2);
	} else if (mathSymbol == "*"){
		console.log(num1 * num2);
	} else if (mathSymbol == "sqrt"){
		console.log(Math.sqrt(num1));
	} else {
		console.log("Please input addition, subtraction, division, multiplication, or square root operation in prefix form.")
		console.log("Example: + 2 3")
	}


	// This line closes the connection to the command line interface.
	reader.close()

});

