var string = document.querySelector('.func');


function equalizer() {

}

var numButtons = document.querySelector('.numButtons');

numButtons.addEventListener('click', function(numButt) {
	if (numButt.target.classList.contains('numB')) {
		string.value += numButt.target.value;
	}
})

var functions = document.querySelector('.functions');

functions.addEventListener('click', function(funcButt) {
	if (funcButt.target.classList.contains('funcB')) {
		string.value += funcButt.target.value;
	}
})

var equalButt = document.querySelector('.numBequal');
var answer = document.querySelector('.answer');

equalButt.addEventListener('click', function(equalizing) {
	answer.value = eval(string.value);
})

var c_ce = document.querySelector('.c_ce');

c_ce.addEventListener('click', function(clear) {
	string.value = '';
	answer.value = '';
})