var nomes = ["Diego", "Gabriel", "Lucas"];
for(var i=0; i<3; i++ ){
		var el = document.createElement('li');
				el.innerHTML = "<p>" + nomes[i] + "</p>";
		var container = document.querySelector('ul');
				container.appendChild(el); 
}

// innerHTML é pra escrever no HTML
// innerText é pra captar o text do HTML