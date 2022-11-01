let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let ok = true;
let i = 0;
do {
	ok = confirm(`Сьогодні ${days[i]}, хочете побачити наступний день?`);
	i++;
	if (i == 6) {
		i = 0;
	}
}
while (ok == true)

