var farenheit;
var celsius;


function convertTemp(temperature, system) {
	if (system === 'celsius') {
      celsius = ((temperature - 32) / 1.8);
      
      return celsius;
      
	} else if (system == 'farenheit') {
		farenheit = ((temperature * 1.8) +32);
      
      return farenheit;
	}
};

var answers = [];

var answer1 = convertTemp (212, 'celsius');
var answer2 = convertTemp (32, 'celsius');
var answer3 = convertTemp (65, 'celsius');
var answer4 = convertTemp (-40, 'farenheit');

answers.push(answer1);
answers.push(answer2);
answers.push(answer3);
answers.push(answer4);

console.log(answers);
document.write('Here are the unformatted answers: ' + answers);