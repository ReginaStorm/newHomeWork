//Часть 1. Создайет инпут и три кнопки для очистки, блокировки и разблокировки инпута
clearFirstInput.onclick = function() {firstInput.value = '';}
blockFirstInput.onclick = function() {firstInput.disabled = 1;}
unblockFirstInput.onclick = function() {firstInput.disabled = 0;}
//Часть 2. Создайте два текстовых инпута и кнопку, кнопка по клику должна содержать value кнопок местами
changeInput.onclick = function() {
	let temp = secondInput.value;
	secondInput.value = thirdInput.value;
	thirdInput.value = temp;
}