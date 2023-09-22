'use strict'

const { letters, words } = require("./functions")

let cadena = prompt("Introduce una frase")

console.log("Frase: " + cadena)
console.log(letters(cadena) + " letras y " + words(cadena) + " palabras")
console.log(upperString(cadena))
console.log(titleString(cadena))
console.log(backwardsLetters(cadena))
console.log(backwardsWords(cadena))

if(palindrome(cadena)) {
    console.log("Sí es un palíndromo")
} else {
    console.log("No es un palíndromo")
}