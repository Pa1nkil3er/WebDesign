table = document.getElementById('table');
const addBtn = document.getElementById('addBtn');
const clearBtn = document.getElementById('clearBtn');
Name = document.getElementById('name');
date = document.getElementById('date');
Priority = document.getElementById('priority');
Tags = document.getElementById('tags');
Description = document.getElementById('description');
tbody = document.getElementById('tbody');

addBtn.onclick = () => {
	inputName = Name.value;
	inputDate = date.value;
	inputPriority = Priority.value;
	inputTags = Tags.value;
	inputDescription = Description.value;
	if (Symbol.value != "" && Name.value != "" && date.value != "" && Priority.value != "" && Tags.value != "" && Description.value != "") {
		tbody.innerHTML += `<tr><td>${inputName}</td><td>${inputDate}</td><td>${inputPriority}</td><td>${inputTags}</td><td>${inputDescription}
		</td><td><select><option>Done</option><option>WIP</option><option>Not started</option></select></td><td><button onclick="ClearTr(this)">Clear</button></td></tr> `;
	}
}
clearBtn.onclick = () => {
	tbody.innerHTML = "";
}
function ClearTr(r) {
	let i = r.parentNode.parentNode.rowIndex;
	table.deleteRow(i);
}
function Search() {
	let found;
	let searchInput = document.getElementById('searchInput');
	let filter = searchInput.value.toUpperCase();
	let tr = tbody.getElementsByTagName("tr");
	for (let i = 0; i < tr.length; i++) {
		let td = tr[i].getElementsByTagName("td");
		for (let j = 0; j < td.length; j++) {
			if (td[j].innerHTML.toUpperCase().indexOf(filter) > -1) {
				found = true;
			}
		}
		if (found) {
			tr[i].style.display = "";
			found = false;
		}
		else {
			tr[i].style.display = "none";
		}

	}
}
function sortTable(n) {
	let rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
	switching = true;
	dir = "asc";
	while (switching) {
		switching = false;
		rows = table.rows;
		for (i = 1; i < (rows.length - 1); i++) {
			shouldSwitch = false;
			x = rows[i].getElementsByTagName("TD")[n];
			y = rows[i + 1].getElementsByTagName("TD")[n];
			if (dir == "asc") {
				if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
					shouldSwitch = true;
					break;
				}
			} else if (dir == "desc") {
				if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
					shouldSwitch = true;
					break;
				}
			}
		}
		if (shouldSwitch) {
			rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
			switching = true;
			switchcount++;
		} else {
			if (switchcount == 0 && dir == "asc") {
				dir = "desc";
				switching = true;
			}
		}
	}
}