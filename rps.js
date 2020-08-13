let ask = true ;
while (ask){
//player
let p = prompt('choose : rock / paper / scissors !');

//computer

//random
let computer = Math.random();

if (computer < 0.34) {
	computer = 'rock';
}else if (computer >= 0.34 && computer < 0.67) {
	computer = 'paper';
}else {
	computer = 'scissors';
}

//rules

/*let hasil = '';
if (p == computer) {
	result = 'TIE!';
} else if (p == rock) {
	if (computer == paper) {
		result = 'LOSE!';
	}else {
		result = 'WIN!';
	}
}else if (p == paper) {
	if (computer == scissors) {
		result = 'LOSE!';
	}else {
		result = 'WIN!';
	}
}else if (p == scissors) {
	if (computer == rock) {
		result = 'LOSE!';
	}else {
		result = 'WIN!';
	} 
}*/
if (p == computer) {
	result = 'TIE!';
} else if (p == 'rock') {
	result = ( computer=='paper') ? 'LOSE!' : 'WIN!';
}else if (p == 'paper') {
	result = ( computer=='scissors') ? 'LOSE!' : 'WIN!';
}else if (p == 'scissors') {
	result = ( computer=='rock') ? 'LOSE!' : 'WIN!';
}else{
	result = 'choose the wrong word!';
}
//result
alert('You Choose  : ' + p + ' and computer choose : ' + computer + '\nso the result : YOU ' + result);

ask = confirm('again?');

}

alert ('Thank You for playing.');