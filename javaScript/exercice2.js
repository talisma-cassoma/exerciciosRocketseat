/*
2º exercício
Utilizando o resultado do primeiro desafio, toda vez que o usuário passar o mouse por cima de
algum quadrado troque sua cor para uma cor aleatória gerada pela função abaixo:
*/ 
 
//------ex1-----: parte do botao 
var btn = document.querySelector("#btn");
		btn.addEventListener("click", clone);

//funcao que gera os quadrados 
function clone(){
	var element = document.createElement('div');
			element.setAttribute('class', 'square')
			element.style.width = '100px';
			element.style.height = '100px';
			element.style.backgroundColor = 'red';
	var container = document.querySelector("body");
			container.appendChild(element)
	
	//-----------------ex2--------------
	element.addEventListener("mouseover", changeColor)
	
	function changeColor(){
			element.style.backgroundColor = newColor;
		}
	function getRandomColor() {
			var letters = "0123456789ABCDEF";
 			var color = "#";
 			for (var i = 0; i < 6; i++) {
 				color += letters[Math.floor(Math.random() * 16)];
 				}
 		return color;
		}
	var newColor = getRandomColor(); // #E943F0
}



	//como funciona o addEventListener e o querySelector na hora do processamento??? 