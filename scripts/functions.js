'use strict'

function letters(cadena) {
	return cadena.length
}

function words(cadena) {
	return cadena.split(' ').length
}

function upperString(cadena) {
	return cadena.toUpperCase()
}

function titleString(cadena) {
	return  (cadena.split(' ').map( cadena => cadena.charAt(0).toLocaleUpperCase() + cadena.slice(1))).join(' ');
}

function backwardsLetters(cadena) {
	return cadena.split('').map(cadena => cadena.split('')).reverse().join('')
}

function backwardsWords(cadena) {
	let array = cadena.split(' ')
	return array.map(cadena => cadena.split(' ')).reverse().join(' ')
}

function palindrome(cadena) {
	cadena = cadena.replaceAll(" ","").toLocaleUpperCase()
	let cadenaReverse = backwardsLetters(cadena)
	return cadena === cadenaReverse
}

module.exports = {
	letters,
	words,
	upperString,
	titleString,
	backwardsLetters,
	backwardsWords,
	palindrome
}
