//Часть 1. Создайет инпут и три кнопки для очистки, блокировки и разблокировки инпута
let buttonClean = document.querySelector('.clearFirstInput'),
	buttonBlock = document.querySelector('.blockFirstInput'),
	buttonUnblock = document.querySelector('.unblockFirstInput'),
	firstInput = document.querySelector('.firstInput');	

buttonClean.addEventListener('click', cleanFunction);
buttonBlock.addEventListener('click', blockFunction);
buttonUnblock.addEventListener('click', unblockFunction);

function cleanFunction(event) {
	firstInput.value="";
	check();
}
function blockFunction(event) {
	firstInput.setAttribute("disabled", true);
	check();
}
function unblockFunction(event) {
	firstInput.removeAttribute("disabled");
	if (firstInput.placeholder==="Ввод заблокирован") {
		firstInput.value=""; 
		firstInput.placeholder="Введите текст";
	};
}
function check(event) {
if (firstInput.value==="" && firstInput.disabled === true) {
	firstInput.placeholder="Ввод заблокирован";
	}
}

//Часть 2. Создайте два текстовых инпута и кнопку, кнопка по клику должна содержать value кнопок местами
let buttonChange = document.querySelector('.changeInput'),
	secondInput = document.querySelector('.secondInput'),
	thirdInput = document.querySelector('.thirdInput'),
	eskobar = document.querySelector('.hideEskobar');

buttonChange.addEventListener('click', replaceFunction);
	
function replaceFunction(event) {
	if ((secondInput.value==='путин' && (thirdInput.value==='навальный')) || ((thirdInput.value==='путин') && (secondInput.value==='навальный'))) {
		eskobar.classList.add('showEskobar');
		eskobar.classList.remove('hideEskobar');
	}	
		else {
		eskobar.classList.add('hideEskobar');
		eskobar.classList.remove('showEskobar');
	}
	let temp = secondInput.value;
	secondInput.value = thirdInput.value;
	thirdInput.value = temp;
}	
