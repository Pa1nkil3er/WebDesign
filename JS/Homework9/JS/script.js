let time = {
	hour: 23,
	minute: 59,
	second: 59,
};
function showTime(time) {
	alert(`Зараз: ${time.hour}:${time.minute}:${time.second}`);
}
showTime(time);
function addTime(time) {
	time.second += 1;
	if (time.minute == 59 && time.second == 60) {
		time.hour += 1;
		time.minute = 0;
		time.second = 0;
		if (time.hour == 24) { time.hour = 0; }
	}
	if (time.minute < 59 && time.second == 60) {
		time.minute += 1;
		time.second = 0;
	}
	alert(`Після виконання функції додавання: ${time.hour}:${time.minute}:${time.second}`);

}
addTime(time);
function minusTime(time) {
	if (time.hour == 0 && time.minute == 0 && time.second == 0) {
		time.hour = 23;
		time.minute = 59;
		time.second = 59;
	}
	if (time.hour <= 23 && time.minute == 0 && time.second == 0) {
		time.hour -= 1;
		time.minute = 59;
		time.second = 59;
	}
	if (time.hour > 0 && time.minute > 0 && time.second == 0) {
		time.minute -= 1;
		time.second = 59;
	}
	alert(`Після виконання функції віднімання: ${time.hour}:${time.minute}:${time.second}`);
}
minusTime(time);
sec = +prompt("Скільки секунд ви бажаєте добавити до даного часу?: ");
function addsecond(sec) {
	time.second = time.second + sec;
	if (time.second >= 60) {//180, наприклад
		let s = time.second / 60;//180/60 = 3;
		if (Number.isInteger(s) == true) {//немає остачі, тому тру;
			time.second = 0;//позначаємо 0, оскільки немає залишку;
			time.minute = time.minute + s;//додаємо наші переведені з секунд в хвилини хвилин до хвилин об'єкта;
		}
		if (Number.isInteger(s) == false) { //нехай значення секунд буде 121, тобто 121/60 = 2.01 не є інтежером;
			let rest = time.second % 60; // 121%60=1(% -- математична функція, яка в результат дає остачу з ділення двох чисел);
			s = Math.floor(s);//Math.floor(2.01)=2 (флор округлює до меншого, тому незважаючи на те, що після коми, все рівно буде 2);
			time.minute = time.minute + s;//додаємо додаємо наші переведені,округлені з секунд хвилини до хвилин об'єкта;
			time.second = 0;//позначаємо 0;
			time.second = time.second + rest;//додаємо залишок до секунд нашого об'єкта;
		}
		if (time.minute >= 60) {
			let m = time.minute / 60;
			if (Number.isInteger(m) == true) {
				time.minute = 0;
				time.hour = time.hour + m;
			}
			if (Number.isInteger(m) == false) {
				let rest2 = time.minute % 60;
				m = Math.floor(m);
				time.hour += m;
				time.minute = 0;
				time.minute = time.minute + rest2;
			}
		}
		if (time.hour >= 24) {
			let h = time.hour / 24;
			if (Number.isInteger(h) == true) { time.hour = 0; }
			if (Number.isInteger(h) == false) {
				let rest3 = time.hour % 24;
				h = Math.floor(h);
				time.hour = 0;
				time.hour = time.hour + rest3;
			}
		}
	}
	alert(`Після виконання функції: ${time.hour}:${time.minute}:${time.second}`);
}
addsecond(sec);