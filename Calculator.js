var num = "";
var numbers = [];
var decimal = false;
											


function button(nmr) {
	if (nmr == '=') {
		num = Number(num);
		numbers.push(num);
		document.getElementById('display').innerHTML += num + " " + nmr;
		num = "";
		result();
	} else if(nmr == '+' ||nmr == '-' ||nmr == '/' ||nmr == '*'){
		num = Number(num);
		numbers.push(num);
		document.getElementById('display').innerHTML += num + " " + nmr + " ";
		num = "";
		numbers.push(nmr);
		decimal = false;
	} else {
		num += nmr;
		document.getElementById('answer').innerHTML = num;
	}
	console.log(nmr);
}

function addDecimal() {
	if (decimal == false) {
		num += "."
		decimal = true
		console.log("addDecimal")
	}
}

function clearNumbers() {
	console.log("clear")
	num = "";
	numbers = [];
	decimal = false;
	document.getElementById("display").innerHTML = "";
	document.getElementById("answer").innerHTML = "";
}

function result(){
	var loop= numbers.length
	for (var i = 0; i < loop; i++) {
		for (var l = 0; l < numbers.length; l++) {
			if (numbers[l] == '*') {
				numbers.splice(l-1, 3, numbers[l-1] * numbers[l+1]);
				console.log('keer');
			} else if (numbers[l] == '/') {
				numbers.splice(l-1, 3, numbers[l-1] / numbers[l+1]);
				console.log('delen');
			}
		}
		for (l = 0; l < numbers.length; l++) {
			if (numbers[l] == '+') {
				numbers.splice(l-1, 3, numbers[l-1] + numbers[l+1]);
				console.log('plus');
			} else if (numbers[l] == '-') {
				numbers.splice(l-1, 3, numbers[l-1] - numbers[l+1]);
				console.log('min');
			}
		}
	}
	document.getElementById('answer').innerHTML = numbers[0];
}