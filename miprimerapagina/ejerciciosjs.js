
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

/**************ARRAY DE OBJETOS*******************************/

/*1)
Utilizando forEach, crea una función que reciba un array de 
palabras y devuelva otro solamente con las palabras que incluyan
 la letra “m” (tanto mayúscula como minúscula).*/

// const palabras = ['Mandibula','Craneo','Medula osea',
// 'Cadera mecanica','Oido',];

// const palabrasConM = (palabras) => {
//   let nuevoArray = [];
//   palabras.forEach((palabra) => {
//     if (palabra.toLowerCase().includes("m")) {
//       nuevoArray.push(palabra);
//     }
//   });
//   console.log(nuevoArray);
//   return nuevoArray;
// };

// palabrasConM(palabras);

/*2)
Utilizando forEach, crea una función que reciba dos números y un 
array de números y que devuelva otro array con aquellos números
 que estén en el array y sean mayores al primer numero dado y 
 menores al segundo ( sin incluirlos).*/

// const arrayNumeros=[2,3,53,6,3,23,665,3,34,2];

// const numerosEnIntervalo = (num1, num2, numeros) => {
//   let nuevoArray = [];
//   numeros.forEach((numero) => {
//     if (numero > num1 && numero < num2) {
//       nuevoArray.push(numero);
//     }
//   });
//   console.log(nuevoArray);
//   return nuevoArray;
// };

// numerosEnIntervalo(8, 300, arrayNumeros);

/*3)
Utilizando forEach, crea una función que reciba dos números y un 
array de números y que devuelva el mismo array pero con los
 números mayores al primer numero dado multiplicados por el 
 segundo numero dado. En caso de que no sean mayores al número 
 dado, devolver el mismo número en esa posición.

Ejemplo: Si tenemos un array de números del 1 al 5 , y llamamos a
 multiplicarMayoresA(3,10,numeros) , el output será : 
 [1,2,3,40,50]*/

// const arrayNumeros = [1, 2, 6, 8, 11, 12, 13, 25, 26];

// const multiplicarMayoresA = (limite, multiplicador, numeros) => {
//   let nuevoArray = [];
//   numeros.forEach((numero) => {
//     if (numero > limite) {
//       nuevoArray.push(numero * multiplicador);
//     } else {
//       nuevoArray.push(numero);
//     }
//   });
//   console.log(nuevoArray);
//   return nuevoArray;
// };

// multiplicarMayoresA(4, 10, arrayNumeros);

/*4)
Crea una función que reciba un array de números y un número que 
EN CASO DE QUE EXISTA al menos un número mayor al dado, retorne 
el primero que cumpla con esa condición. En caso contrario, que
retorne “No hay números mayores al número dado”*/

// const arrayNumeros = [1, 2, 3, 4, 5];

// const buscarNumero = (numeros, numeroLimite) =>
//   numeros.some((numero) => numero > numeroLimite)
//     ? numeros.find((numero) => numero > numeroLimite)
//     : "No hay numeros mayores al número dado";

// // Es lo mismo que escribir

// const buscarNumeroAlt = (numeros, numeroLimite) => {
//   if (numeros.some((numero) => numero > numeroLimite)) {
//     return numeros.find((numero) => numero > numeroLimite);
//   } else {
//     return "No hay numeros mayores al número dado";
//   }
// };

// console.log(buscarNumero(arrayNumeros, 2));

/*5)
Crea una función que reciba un array de palabras que devuelva 
la primer palabra del array ( la primera que se encuentre) que
tenga mas de 4 letras. En caso de que no haya, deberá 
un string que diga : “No hay palabras con mas de 4 letras”*/

// const arrayPalabras = ["hola", "bienvenidos", "a", "la", "Nucbanetta"];

// const buscarPalabras = (palabras) =>
//   palabras.some((palabra) => palabra.length > 4)
//     ? palabras.find((palabra) => palabra.length > 4)
//     : "No hay palabras con mas de 4 letras";

// // Esto es lo mismo que escribir:

// const buscarPalabrasAlt = (palabras) => {
//   if (palabras.some((palabra) => palabra.length > 4)) {
//     return palabras.find((palabra) => palabra.length > 4);
//   } else {
//     return "No hay una palabras con mas de 4 letras";
//   }
// };

// console.log(buscarPalabras(arrayPalabras));

/*6)
Utilizando map, crea una función que reciba un array de números 
y devuelva el mismo array pero con todos los números duplicados.*/

// const arrayNumeros = [2, 4, 6, 8, 10, 12, 14];

// const duplicados = (numeros) => numeros.map((num) => num * 2);

// //Esto es lo mismo que :

// const duplicadosAlt = (numeros) => {
//   return numeros.map((num) => num * 2);
// };

// console.log(duplicados(arrayNumeros));
// /* output:
// [
//    4,  8, 12, 16,
//   20, 24, 28
// ]
// */

// console.log(arrayNumeros);

/*7)
Usando el mismo array de números y map , crea una función que 
reciba un array de números, un número y una función que realice
una operación matemática con el número dado y la función pasada 
como parámetro para cada número del array dado , y devuelva el
nuevo array con los resultados ( podes utilizar las funciones 
de suma, resta, multiplicación y división de anteriores 
prácticas.*/

// const arrayNumeros = [2, 4, 6, 8, 10, 12, 14];

// const sumar = (a, b) => a + b;
// const restar = (a, b) => a - b;
// const multiplicar = (a, b) => a * b;
// const dividir = (a, b) => a / b;

// const realizarOperacion = (numeros, num, operacion) =>
//   numeros.map((numero) => operacion(numero, num));

// console.log(
//   realizarOperacion(arrayNumeros, 10, sumar)
// ); /*output: [12, 14, 16, 18,20, 22, 24]*/

// console.log(
//   realizarOperacion(arrayNumeros, 10, multiplicar)
// ); /*output: [20,  40,  60, 80, 100, 120, 140]*/

//Le estamos pasando una función como callback y en base a lo que
//le pasemos será el output que tengamos

/*8)
A partir de este ejercicio vamos a trabajar con objetos. Les 
damos la clase y también 5 películas ya creadas (vamos a usar
este array para los siguientes ejercicios también).

class Pelicula {
  constructor(titulo, duracion, año) {
    this.titulo = titulo;
    this.duracion = duracion;
    this.año = año;
  }
}

const pokemon = new Pelicula("Pokemon:La Pelicula", 75, 1998);
const avengers = new Pelicula("Avengers: Endgame", 181, 2019);
const starWars = new Pelicula(
  "Star Wars: El despertar de la fuerza",
  135,
  2015
);
const batman = new Pelicula("Batman vs Superman", 151, 2016);
const wonderWoman = new Pelicula("La Mujer Maravilla", 141, 2017);


Como primera medida, creá un array de películas vacío y mediante 
métodos de array agrega todas las películas al array vacío e 
imprimí por consola el array.*/

// class Pelicula {
//   constructor(titulo, duracion, año) {
//     this.titulo = titulo;
//     this.duracion = duracion;
//     this.año = año;
//   }
// }

// const pokemon = new Pelicula("Pokemon:La Pelicula", 75, 1998);
// const avengers = new Pelicula("Avengers: Endgame", 181, 2019);
// const starWars = new Pelicula(
//   "Star Wars: El despertar de la fuerza",
//   135,
//   2015
// );
// const batman = new Pelicula("Batman vs Superman", 151, 2016);
// const wonderWoman = new Pelicula("La Mujer Maravilla", 141, 2017);

// const arrayPeliculas = [];

// arrayPeliculas.push(pokemon, avengers, starWars, batman, wonderWoman);

// console.log(arrayPeliculas);

/*9)
Creá una función que ordene el array por año de salida, desde la
mas larga hasta la mas corta e imprimí el array por consola .*/

// class Pelicula {
//   constructor(titulo, duracion, año) {
//     this.titulo = titulo;
//     this.duracion = duracion;
//     this.año = año;
//   }
// }

// const pokemon = new Pelicula("Pokemon:La Pelicula", 75, 1998);
// const avengers = new Pelicula("Avengers: Endgame", 181, 2019);
// const starWars = new Pelicula(
//   "Star Wars: El despertar de la fuerza",
//   135,
//   2015
// );
// const batman = new Pelicula("Batman vs Superman", 151, 2016);
// const wonderWoman = new Pelicula("La Mujer Maravilla", 141, 2017);

// const arrayPeliculas = [];

// arrayPeliculas.push(pokemon, avengers, starWars, batman, wonderWoman);

// const ordenarPorAño = () => {
//   arrayPeliculas.sort(function (peli1, peli2) {
//     if (peli1.año > peli2.año) {
//       return 1;
//     }
//     if (peli1.año < peli2.año) {
//       return -1;
//     }
//     // Si el año de la peli1 es igual al de peli 2.
//     return 0;
//   });
//   console.log(arrayPeliculas);
// };

// ordenarPorAño();

/*10)
Crea una función que ordene el array por duración, desde la que
mas haya durado hasta la que menos. imprimí por consola el 
array.*/

// class Pelicula {
//   constructor(titulo, duracion, año) {
//     this.titulo = titulo;
//     this.duracion = duracion;
//     this.año = año;
//   }
// }

// const pokemon = new Pelicula("Pokemon:La Pelicula", 75, 1998);
// const avengers = new Pelicula("Avengers: Endgame", 181, 2019);
// const starWars = new Pelicula(
//   "Star Wars: El despertar de la fuerza",
//   135,
//   2015
// );
// const batman = new Pelicula("Batman vs Superman", 151, 2016);
// const wonderWoman = new Pelicula("La Mujer Maravilla", 141, 2017);

// const arrayPeliculas = [];

// arrayPeliculas.push(pokemon, avengers, starWars, batman, wonderWoman);

// console.log(arrayPeliculas);

// const ordenarPorDuracion = () => {
//   arrayPeliculas.sort(function (peli1, peli2) {
//     if (peli1.duracion > peli2.duracion) {
//       return -1;
//     }
//     if (peli1.duracion < peli2.duracion) {
//       return 1;
//     }
//     // a must be equal to b
//     return 0;
//   });
//   console.log(arrayPeliculas);
// };

// ordenarPorDuracion();

/*11)
Crea una función que reciba un array de películas como parámetro
y devuelva un nuevo array con las películas que duren mas de
150 minutos.*/

// class Pelicula {
//   constructor(titulo, duracion, año) {
//     this.titulo = titulo;
//     this.duracion = duracion;
//     this.año = año;
//   }
// }

// const pokemon = new Pelicula("Pokemon:La Pelicula", 75, 1998);
// const avengers = new Pelicula("Avengers: Endgame", 181, 2019);
// const starWars = new Pelicula(
//   "Star Wars: El despertar de la fuerza",
//   135,
//   2015
// );
// const batman = new Pelicula("Batman vs Superman", 151, 2016);
// const wonderWoman = new Pelicula("La Mujer Maravilla", 141, 2017);

// const arrayPeliculas = [];

// arrayPeliculas.push(pokemon, avengers, starWars, batman, wonderWoman);

// console.log(arrayPeliculas);

// const pelisLargas = (peliculas) =>
//   peliculas.filter((peli) => peli.duracion > 150);

// // Esto es lo mismo que
// const pelisLargasAlt = (peliculas) => {
//   return peliculas.filter((peli) => peli.duracion > 150);
// };
// console.log(pelisLargas(arrayPeliculas));

/*12)

Crea una función que reciba un array de películas como parámetro 
y devuelva un nuevo array con las películas que duren menos de
150 minutos y sean de un año menor o igual que el año 2016 .*/

// class Pelicula {
//   constructor(titulo, duracion, año) {
//     this.titulo = titulo;
//     this.duracion = duracion;
//     this.año = año;
//   }
// }

// const pokemon = new Pelicula("Pokemon:La Pelicula", 75, 1998);
// const avengers = new Pelicula("Avengers: Endgame", 181, 2019);
// const starWars = new Pelicula(
//   "Star Wars: El despertar de la fuerza",
//   135,
//   2015
// );
// const batman = new Pelicula("Batman vs Superman", 151, 2016);
// const wonderWoman = new Pelicula("La Mujer Maravilla", 141, 2017);

// const arrayPeliculas = [];

// arrayPeliculas.push(pokemon, avengers, starWars, batman, wonderWoman);

// console.log(arrayPeliculas);

/*13)

Creá una función que reciba un array de películas y retorne la 
sumatoria de los minutos de duración de todas las películas del
mismo. Imprimí luego el siguiente mensaje en consola:

“La cantidad total de minutos de las películas es de {total} 
minutos”*/

// class Pelicula {
//   constructor(titulo, duracion, año) {
//     this.titulo = titulo;
//     this.duracion = duracion;
//     this.año = año;
//   }
// }

// const pokemon = new Pelicula("Pokemon:La Pelicula", 75, 1998);
// const avengers = new Pelicula("Avengers: Endgame", 181, 2019);
// const starWars = new Pelicula(
//   "Star Wars: El despertar de la fuerza",
//   135,
//   2015
// );
// const batman = new Pelicula("Batman vs Superman", 151, 2016);
// const wonderWoman = new Pelicula("La Mujer Maravilla", 141, 2017);

// const arrayPeliculas = [];

// arrayPeliculas.push(pokemon, avengers, starWars, batman, wonderWoman);

// console.log(arrayPeliculas);

// const totalDeMinutos = (peliculas) =>
//   peliculas.reduce((acc, curr) => acc + curr.duracion, 0);

// // Es lo mismo que poner:

// const totalDeMinutosAlt = (peliculas) => {
//   let duracionTotal = peliculas.reduce((acc, curr) => acc + curr.duracion, 0);
//   return duracionTotal;
// };

// console.log(
//   `La cantidad total de minutos de las peliculas es de ${totalDeMinutos(
//     arrayPeliculas
//   )} minutos.`
// );

/***************************************************************/
// Ejercicio E1

// Crear el array de objetos "Pizzas".
// Debemos crear 6 objetos como mínimo.
// Cada objeto debe tener definido su id (1,2,3,etc), nombre,
// ingredientes (Sobre la base) y precio. (Ingredientes debe ser 
// una lista). 

// Crear una iteración del array que imprima en consola:
// a) Las pizzas que tengan un id impar.
// b) ¿Hay alguna pizza que valga menos de $600?
// c) Los nombres de todos las pizzas.
// d) Los precios de las pizzas.
// e) El nombre de cada pizza con su respectivo precio.

// Cada respuesta debe ser, como siempre, usuario friendly. 
// Si (como en el punto B), la respuesta es un booleano, no 
// imprimir el booleano. 
// Manejemos esa respuesta, pensando en que un usuario 
// va a leer eso. 

// Por ejemplo: "La pizza X, tiene un valor de $XXXX”.

class pizza{
  constructor(id,nombre,ingredientes,precio)
  {
    this.id=id;
    this.nombre=nombre;
    this.ingredientes=ingredientes;
    this.precio=precio;
  }
}

const pepperoni=new pizza(1,'Pepperoni',['Muzzarela','Tomate','Orégano','Pepperoni','Bacon','Olivas Negras'],550);
const carbonara=new pizza(2,'Carbonara',['Muzzarela','Orégano','Bacon','Cebolla','Champinones','Salsa Carbonara'],580);
const vegetal=new pizza(3,'Vegetal',['Muzzarela','Tomate','Orégano','Calabacin','Berenjena','Cebolla','Pimiento','Champinones'],310);
const york=new pizza(4,'York',['Muzzarela','Tomate','Orégano','Jamón York','Champinones','Olivas'],285);
const hawaiana=new pizza(5,'Hawaiana',['Muzzarela','Tomate','Orégano','Jamón York','Piña'],950);
const yorkYbacon=new pizza(6,'York & Bacon',['Muzzarela','Tomate','Orégano','Bacon','Jamón York','Champinones','Cebolla','Olivas Negras'],230);
const bacon=new pizza(7,'Bacon',['Muzzarela','Tomate','Orégano','Bacon','Champinones','Cebolla'],930);
const barbacoa=new pizza(8,'Barbacoa',['Muzzarela','Tomate','Orégano','Bacon','Ternera','Salsa Barbacoa'],1370);
const atun=new pizza(9,'Atún',['Muzzarela','Tomate','Orégano','Atún','Pimiento Rojo','Cebolla','Olivas Negras'],2350);
const quesoCabra=new pizza(10,'Queso Cabra',['Muzzarela','Tomate','Orégano','Edam','Gouda','Azul','Cabra','Cheddar'],680);
const pollo=new pizza(11,'Pollo',['Muzzarela','Tomate','Orégano','Pollo','Pimiento','Olivas','Cebolla'],1400);
const mejicana=new pizza(12,'Mejicana',['Muzzarela','Tomate','Orégano','Salsa Picante','Guindilla','Champinones','Ternera'],1600);

const arrayPizza=[];

arrayPizza.push(pepperoni,carbonara,vegetal,york,hawaiana,yorkYbacon,bacon,barbacoa,atun,quesoCabra,pollo,mejicana);

//console.log(arrayPizza);

//Punto A

//  const pizzaImpares = () => {
//    arrayPizza.forEach(
//       (pizza) => {
//         if((pizza.id %2) !== 0)
//         console.log(`ID:${pizza.id}, ${pizza.nombre}, sus ingredientes son: ${pizza.ingredientes}. Valor $${pizza.precio}`)
//       }
//     );
//   }

//   console.log("A)Las Pizzas con ID impar son: ")
//   pizzaImpares();

//Punto B

// const pizzaMenos600 = () => {
//   arrayPizza.forEach((pizza) => {
//     if(pizza.precio <= 600)
//       console.log(`La pizza ${pizza.nombre} que tiene un valor de $${pizza.precio}`)
//   })
// }

// console.log("B)Las pizzas menores a $600 son: ")
// pizzaMenos600();

//Punto C

// const nombresPizzas = () => {
//   arrayPizza.forEach((pizza) => {
//     console.log(`Pizza ${pizza.nombre}`)
//   })
// }

// console.log("C)Los nombres de las pizzas son: ")
// nombresPizzas();

//Punto D

// const preciosPizza = () => {
//   arrayPizza.forEach((pizza) => {
//     console.log(`$${pizza.precio}`)
//   })
// }

// console.log("D)Los valores de las pizzas son: ")
// preciosPizza();

//Punto E

// const preciosPizza1 = () => {
//   arrayPizza.forEach((pizza) => {
//     console.log(`Pizza ${pizza.nombre} $${pizza.precio}`)
//   })
// }

// console.log("E)Los valores de las pizzas son: ")
// preciosPizza1();

/***************************************************************/


