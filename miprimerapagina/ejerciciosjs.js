
/**************CONDICIONALES************************************/

// let nombre = 'Silvana';
// let edad = 29;
// let numeroA = 32;
// let numberoB = 29;

//console.log(nombre,edad);

//console.log(`Hola! Mi nombre es ${nombre} y tengo ${edad} años`);

//console.log(numeroA + numberoB);

    // let numero = 15;
    // numero = 25;

    // console.log(numero);

// let mensaje = "Cuidado!"

// alert(mensaje);

// let valor = prompt("Ingrese su edad:")
// console.log(valor);

// let nombre = prompt("Ingrese su nombre:");
// alert(`El nombre ingresado es ${nombre}`);

// let nombre1 = prompt("Ingrese primer nombre:");
// let nombre2 = prompt("Ingrese segundo nombre:");
// alert(`El primer nombre es ${nombre1} y el segundo ${nombre2}`);

// let edad = prompt("Ingrese su edad:");
// if(edad >= 18)
// {
//     console.log("Eres mayor de edad.");
// }
// else
// {
//     console.log("Eres menor de edad.");
// }

// let valor1 = 65;
// let valor2 = 5;
// if (valor1 > valor2) 
// {
//     console.log("El valor 1 es mayor que el valor 2.");
// } else if (valor2 > valor1)
// {
//     console.log("El valor 2 es mayor que el valor 1.");
// }
// else
// {
//     console.log("Los valores son iguales.");
// }    

// let palabra = prompt("Ingrese valor:");
// if(palabra === "alerta" ){
//     alert("Soy una alerta");
// }else if(palabra === "consola"){
//     console.log("Soy un mensaje en la consola");
// }else{
//     alert("Me muestro en ambos lados");
//     console.log("Me muestro en ambos lados");
// }

// let edad = 98;

// if (edad < 20 && edad < 13) {
//     console.log("Soy un niño");
// } else if(edad < 20 && edad >= 13){
//     console.log("Soy un adolescente");
// } else if(edad >= 20 && edad < 50){
//     console.log("Soy un adulto");
// } else {
//     console.log("Soy un adulto mayor");
// }

// let fruta = 'durazno';

// switch (fruta) {
//     case 'manzana':
//         console.log("Soy una manzana");
//         break;
//     case 'frutilla':
//         console.log("Soy una frutilla");
//         break;
//     case 'durazno':
//         console.log("Soy un durazno");
//         break;
//     case 'banana':
//         console.log("Soy una banana");
//         break;
//     default:
//         console.log("No se que soy");
//         break;
// }

/**************CICLOS***************************************/

//-Crear un array con los números del 1 al 10.
//let numeros = [1,2,3,4,5,6,7,8,9,10];
//-Crear un bucle for que imprima en consola todos los números 
//del array.
// for (let i = 0; i < numeros.length; i++) {
//     console.log(numeros[i]);
// }
//-Crear un bucle que imprima solo los primeros 5 números.
// for (let i = 0; i < numeros.length/2; i++) {
//     console.log(numeros[i]);
// }
//-Crear un bucle que imprima los últimos 5 números.
//  for (let i = 5; i < numeros.length; i++) {
//      console.log(numeros[i]);
//  }
//-Crear un bucle que imprima todos los números, excepto
// el que este en la 4ta posición.
// for (let i = 0; i < numeros.length; i++) {
//     if(i==3){
//          continue;
//     }
//     console.log(numeros[i]);
// }

/**************FUNCIONES y ARRAYS*******************************/

//  let helados = ['Chocolate Alpino','Frutilla a la crema',
//  'Limon y Jengibre','Vainilla','Mantecol'];

/*Colocar el elemento al final del array al comienzo*/
// const moverHelado = () => {
//     for (let index = 0; index < helados.length; index++) {
//         if(index==(helados.length-1))
//         {   
//             helados.slice(0,index);
//         }
//     }
// }

// moverHelado();
// console.log(helados);

/*Agregar un sabor al final del array*/
// const agregarSabor = () => {
//     let sabor = prompt('Ingrese nuevo sabor: ')
//     helados.push(sabor);
// }

// agregarSabor();
// console.log(helados);

/*Imprimir array en consola*/
//console.log(helados);

/*Eliminar el primer elemento y colocarlo al final*/
// const modificarHelados = () => {
//     helados.push(helados.shift());
//     console.log(helados);
// }

// modificarHelados();

/*Eliminar el primer elemento y colocarlo al final*/
// const invertirHelados = () => {
//  console.log(helados.reverse().join("-"));
// }
// console.log(helados);
// invertirHelados();

/*Crea otro array de gustos de helado con al menos 
3 gustos de helado. Luego, crea una función que
 una ambos arrays y retorne un único array que 
 solo deje los dos últimos elementos del primer 
 array y los primeros del segundo. Finalmente, 
 imprimí ese nuevo array por pantalla. */

//  let helados2 = ['Durazno','Frutos del Bosque',
//  'Crema del Cielo'];

//  const unirGustos = () => {
//   let gustos = helados.slice(helados.length - 2)
//   .concat(helados2.slice(0, 2));
//   return gustos;
// };

// console.log(unirGustos());

/*Escribí un código en el cual crees un array con 
gustos de helados y una función que reciba un array 
de gustos de helados como parámetro que imprima en 
consola un array con los mismos gustos pero que solo 
estén las primeras 3 letras de cada gusto, pasadas 
todas a mayúscula.*/

// const nombresCortos = (gustos) => {
//   let nuevaLista = [];
//   for (let i = 0; i < gustos.length; i++) {
//     nuevaLista.push(gustos[i].slice(0, 3).toUpperCase());
//   }
//   console.log(nuevaLista);
// };

// nombresCortos(helados);

/*Llegamos al último ejercicio, el cual es bastante particular.
Un integrante del equipo de Nucba es fanático de Cristiano 
Ronaldo y de escribir las palabras al revés. Como si esto
fuera poco, suele poner muchos espacios al principio y al
final de cada frase. El otro día escribió la frase que van 
a ver en este enunciado.

Para arreglar esto, les pedimos que escriban una función que:

- Elimine los espacios al principio y al final de la frase.
- invierta todas las palabras para que el texto pueda leerse 
correctamente.
- Reemplace la palabra “Ronaldo” por la palabra “Messi” y 
viceversa.*/

// let texto =
//   "         .levin us ed sojel yum atse isseM y odnum led rodaguj rojem le se odlanoR          ";

// const arreglarTexto = () => {
//   texto = texto
//     .trim()
//     .split("")
//     .reverse("")
//     .join("")
//     .replace("Messi", "Ronaldo")
//     .replace("Ronaldo", "Messi");
//   console.log(texto);
// };

// arreglarTexto();

/**************FUNCIONES y ARRAYS*******************************/
