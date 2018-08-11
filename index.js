function passwordGenerator(){
	const lettersArr = [];
	const numbersArr = [];
	const passwordArr = [];

	const rand = function(size){ 
		return Math.round(Math.random(size) * size);
	}

	for(let i = 33, len = 122; i <= len; i++){
		if(i < 91 || i > 96){
			lettersArr.push(String.fromCharCode(i));
		}
	}

	for(let i = 0; i < 10; i++){
		numbersArr.push(i);
	}

	for(let i = 0; i < 10; i++){
		if(rand(1) === 0){
			passwordArr.push(numbersArr[rand(numbersArr.length)]);
		}else {
			passwordArr.push(lettersArr[rand(lettersArr.length)]);
		}
	}
	console.log(passwordArr.length);
	return passwordArr.join('');
}

document.querySelector('#passwordButton').addEventListener('click', () => {
  document.querySelector('#password').innerHTML = passwordGenerator();
  document.querySelector('#password').style.cssText = 'font-weight: bold; font-size: 48px'
  document.querySelector('#passwordButton').innerHTML = 'Click again for new password';
});