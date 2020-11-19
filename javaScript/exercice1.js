/*
1º exercício
Crie um botão que ao ser clicado cria um novo elemento em tela com a forma de um quadrado
vermelho com 100px de altura e largura. Sempre que o botão for clicado um novo quadrado deve
aparecer na tela
*/ 

//solucao:

//parte do botao 
var btn = document.querySelector("#btn");
		btn.addEventListener("click", clone);

//funcao que gera os quadrados 
function clone(){
	var element = document.createElement('div');
			element.setAttribute('class', 'square')
			element.style.width = '100px';
			element.style.height = '100px';
			element.style.backgroundColor = 'red';
	var container= document.querySelector("body");
			container.appendChild(element)
}