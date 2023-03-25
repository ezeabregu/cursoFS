/*
*Crear un archivo HTML que contenga:
-H1.
-p.
-div vacío.
-inputs de tipo text, password, email, number, checkbox.

*Asignar un id a cada elemento.
*Capturar cada elemento en una variable.
*Hacer un console.dir() de cada elemento capturado y 
revisar en el navegador qué devuelve y que cambia cuando
modificamos los elementos (Checkbox tildado o 
destildado, inputs vacíos o con contenido).
*/

const titulo = document.getElementById('h1')
titulo.innerHTML="Ejercicios en el DOM"
//console.dir(titulo);

const parrafo = document.getElementById('p')
parrafo.innerHTML="Agregamos texto desde el JS"
//console.dir(parrafo)

const divisor = document.getElementById('div')
divisor.innerHTML="Esto esta en un DIV vacío."
//console.dir(divisor)

const email = document.getElementById('email')
email.defaultValue="habregu@iptel.com.ar"
//console.dir(email)

const passw = document.getElementById('password')
passw.defaultValue="Alt4C0ntr4s3ñ4!"
//console.dir(passw)

const texto = document.getElementById('text')
texto.defaultValue="La contraseña es: Alt4C0ntr4s3ñ4!"
//console.dir(texto)

const check = document.getElementById('checkbox')
check.defaultChecked=true
//console.dir(check)

const numero = document.getElementById('number')
numero.defaultValue=2023
//console.dir(email)