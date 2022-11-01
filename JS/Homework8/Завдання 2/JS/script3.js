let day = +prompt("Введіть день: ");
let month = +prompt("Введіть місяць: ");
let year = +prompt("Введіть рік: ");
let date = new Date(`${year}-${month}-${day}`);
date.setDate(data.getDate() + 1);
console.log(`Наступна дата : ${date.toLocaleDateString()}`);