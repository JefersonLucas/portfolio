/*!
 * Jeferson Luckas - Portfolio
 *
 * Copyright (c) 2020 Jeferson Luckas
 * Released under the MIT license
 * https://github.com/JefersonLucas/my-portfolio
 *
 */

// Tooltip
$(function () {
	$('[data-toggle="tooltip"]').tooltip();
})
// Copiar o texto
let copyText = () => {
//	O texto que será copiado
	const text = "jeferson.lucas@gmail.com";
//	Cria um elemento input (pode ser um textarea)
	let inputTest = document.createElement("input");
	inputTest.value = text;
//	Anexa o elemento ao body
	document.body.appendChild(inputTest);
//	seleciona todo o texto do elemento
	inputTest.select();
//	executa o comando copy
//	aqui é feito o ato de copiar para a area de trabalho com base na seleção
	document.execCommand('copy');
//	remove o elemento
	document.body.removeChild(inputTest);;	
}