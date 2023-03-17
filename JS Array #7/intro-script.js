// Задание 1 - Сумма свойств объекта (сумма зарплат)

let salaries = {
	  John: 100,
	  Ann: 160,
	  Pete: 130
	}
let summSalaries = 0;
for (let KeySalaries of Object.values(salaries)) {
	summSalaries += KeySalaries;
}
console.log(summSalaries);

// Задание 2 - Создать функцию, которая умножить числовые значения объекта на 2; объект следует изменять напрямую

let menu = {
	width: 200,
	height: 300,
	title: "My menu"
}
console.log(menu);
function multiplyNumeric(obj) {
	for (let key in obj) {
		if (typeof obj[key] === "number") {
			obj[key] *= 2;
		}
	}
}
multiplyNumeric(menu);
console.log(menu);