let year = +prompt("Введіть рік: ");
if (year % 400 === 0 || (year % 4 === 0 && year % 100 != 0)) {
	alert(`Рік ${year} є високосним`);
}
else {
	alert(`Рік ${year} не є високосним`);
}