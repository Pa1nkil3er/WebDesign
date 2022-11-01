let usb = +prompt("Введіть розмір флешки в ГБ: ");
quanitity = (usb * 1024) / 820;
alert(`На вашу флешку може поміститися ${quanitity.toFixed(0)} файлів розміром 820Мб`);