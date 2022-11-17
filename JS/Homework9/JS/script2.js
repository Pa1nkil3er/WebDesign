let str = prompt('Введіть текст: ');
// let count = 0;
// let amount = 0;
// function countspace(str) {
// 	alert(`Кількість пробілів у рядку: ${str.split(' ').length - 1}`)
// }
// countspace(str);
// function firstHigh(str) {
// 	alert(str.replace(str[0], str[0].toUpperCase()));
// }
// firstHigh(str);
// function countWords(str) {
// 	str = str.split(' ');
// 	return alert(`Кількість слів у рядку: ${str.filter(word => word !== '').length}`);
// }
// countWords(str);
function IsPalindrome(str) {
	str = str.replace(/ /g, '')
	let newstr = str.split("");
	let rev = newstr.reverse();
	let join = rev.join("");
	let trim = join.replace(/ /g, '')
	if (st1 == trim) {
		alert('Рядок є паліндромом');
	}
	else {
		alert('Рядок не є паліндромом');
	}
}
IsPalindrome(str);

