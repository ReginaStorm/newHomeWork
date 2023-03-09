//Часть 1 - функция camelize(str)
/*let newString = '', newMassive = [], newMassiveKaks = [];
function Anime(newString) {
	newMassive = newString.split("-");
	for (let i = 0; i < newMassive.length; i++) {
		newMassive[i]=newMassive[i].toLowerCase();
	}
	for (let i = 0; i < newMassive.length; i++) {
		newMassiveKaks[i] = newMassive[i].split("");
	}
	for (let i = 1; i < newMassiveKaks.length; i++) {
		newMassiveKaks[i][0] = newMassiveKaks[i][0].toUpperCase();
	}
	for (let i = 0; i < newMassiveKaks.length; i++) {
		newMassive[i] = newMassiveKaks[i].join("");
	}
	newMassive = newMassive.join("");
	return newMassive;
}
console.log (Anime("Я-у-маМы-аНиМе-Я-у-Папы-БурИме"));
console.log (Anime("ХУЙ-ПиЗдА-И-ДжигуРда-Нас-Покинут-НавсеГда"));
*/


/*Часть 2.1 - сумма отрицательных и положительных чисел (без деструктурирующего присваивания (?))
let someMassive = [];
function summa(someMassive) {
	summPositive = 0;
	summNegative = 0;
	for (let i = 0; i < someMassive.length; i++) {
		(someMassive[i] > 0) ? summPositive += someMassive[i] : summNegative += someMassive[i];
	}	
	if (summPositive == 0) {summPositive = 'положительных чисел в массиве нет'}
	if (summNegative == 0) {summNegative = 'отрицательных чисел в массиве нет'}
	return [`Сумма отрицательных чисел: ${summNegative}`, `Сумма положительных чисел: ${summPositive}`]};
console.log(summa([1,9,18,15,39,943,1,-1,-5]));
console.log(summa([0,-2,-3,-10,-3,-4]));
console.log(summa([0,2,3,10,3,4]));
console.log(summa([0,0,0,0,0,0]));
*/



let someMassive = [];
function summa(someMassive) {
	summPositive = 0;
	summNegative = 0;
	for (let i = 0; i < someMassive.length; i++) {
		(someMassive[i] > 0) ? summPositive += someMassive[i] : summNegative += someMassive[i];
	}	
	if (summPositive == 0) {summPositive = 'положительных чисел в массиве нет'}
	if (summNegative == 0) {summNegative = 'отрицательных чисел в массиве нет'}
	return [summNegative, summPositive];
}
[summNegative, summPositive] = summa([1,9,18,15,39,943,1,-1,-5]);
console.log(`Сумма отрицательных чисел: ${summNegative}`, `Сумма положительных чисел: ${summPositive}`);
[summNegative, summPositive] = summa([0,-2,-3,-10,-3,-4]);
console.log(`Сумма отрицательных чисел: ${summNegative}`, `Сумма положительных чисел: ${summPositive}`);
[summNegative, summPositive] = summa([0,2,3,10,3,4]);
console.log(`Сумма отрицательных чисел: ${summNegative}`, `Сумма положительных чисел: ${summPositive}`);
[summNegative, summPositive] = summa([0,0,0,0,0,0]);
console.log(`Сумма отрицательных чисел: ${summNegative}`, `Сумма положительных чисел: ${summPositive}`);

