var box = document.body;
var vragen = [["Wat is de hoofdstad van Frankrijk?", "Parijs"], ["Hoeveel poten heeft een spin?", 8], ["Wat is het grootste meer van Nederland?", "IJsselmeer"]];

function start() {
	for (i in vragen) {
		var vraag = vragen[i];
		var elements = {};
		elements["div"] = document.createElement('div');
		elements["p"] = document.createElement('p');
		elements["p"].innerText = vraag[0];
		elements["p"].style = "margin-bottom: 6px;";
		elements["div"].appendChild(elements["p"]);
		elements["input"] = document.createElement('input');
		if (!isNaN(vraag[1])) {
			elements["input"].type = "number";
		} else {
			elements["input"].type = "text";
		}
		elements["div"].appendChild(elements["input"])
		elements["div"].style = "margin-bottom: 25px;";
		box.appendChild(elements["div"]);
	}
	
	var btn = document.createElement('button');
	btn.style= "margin-top: 15px;";
	btn.innerText = "Check antwoorden!";
	box.appendChild(btn);
	
	btn.addEventListener("click", function() {
		var boxes = document.querySelectorAll('div');
		for (i in boxes) {
			var antwoord = boxes[i].querySelector('input').value.toString();
			if (vragen[i][1].toString() == antwoord) {
				boxes[i].querySelector('input').style.background = "#1efa51";
			} else {
				boxes[i].querySelector('input').style.background = "#fc3730";
			}
		}
	});
}

start();