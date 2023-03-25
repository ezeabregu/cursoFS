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
divisor.innerHTML="Esto está en un DIV vacío."
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

/*
*Crear un HTML con un H1 y un p.
*Tanto el H1 como el p deben tener texto en su interior.
*Crear un CSS con estilos que le den color.

Con lo visto en clase, lograr que, luego de 3 segundos 
de cargada la pagina, el h1 cambie de color y cambiar 
el texto dentro del p.
*/

const tituloh2 = document.getElementById('tituloCambia')
const parrafoP = document.getElementById('textoCambia')
console.dir(tituloh2)
setTimeout(()=>{
    tituloh2.style.color='#ffff00'
    parrafoP.innerHTML="Valores de string nuevos, cargados desde el JS despues de 3 segundos."
},3000);