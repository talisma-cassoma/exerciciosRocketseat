var list = document.querySelector("input");
var i = 0; 

function adicionar(){
	var newElement = document.createElement('li');
			newElement.innerHTML = "<p>" + list.value + "</p>";

			var container = document.querySelector('ul');
					container.appendChild(newElement);
//------remove
	    newElement.addEventListener("click", remove);
	
	function remove(){
		container.removeChild(newElement);
	}
	}
