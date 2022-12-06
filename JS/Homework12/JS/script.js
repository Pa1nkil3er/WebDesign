table = document.getElementById('Table');
const addBtn = document.getElementById('addBtn');
const clearBtn = document.getElementById('clearBtn');
Symbol = document.getElementById('symbol');
Name = document.getElementById('name');
Num = document.getElementById('number');
Mass = document.getElementById('mass');
addBtn.onclick = () => {
	inputSymbol = Symbol.value;
	inputName = Name.value;
	inputNumber = Num.value;
	inputMass = Mass.value;
	if (Symbol.value != "" && Name.value != "" && Num.value != "" && Mass.value != "") {
		table.innerHTML += `<tr><td>${inputSymbol}</td><td>${inputName}</td><td>${inputNumber}</td><td>${inputMass}</td><td><button id="clearTr" onclick="ClearTr(this)">Clear</button></td></tr> `;
	}
}
clearBtn.onclick = () => {
	table.innerHTML = "";
}
function ClearTr(r) {
	let i = r.parentNode.parentNode.rowIndex;
	table.deleteRow(i);
}

function Search() {
	let found;
	let searchInput = document.getElementById('searchInput');
	let filter = searchInput.value.toUpperCase();
	let tr = table.getElementsByTagName("tr");
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