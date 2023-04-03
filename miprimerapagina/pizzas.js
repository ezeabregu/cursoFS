//Ejercicio E1

/*Crear el array de objetos "Pizzas".
Debemos crear 6 objetos como mínimo.
Cada objeto debe tener definido su id (1,2,3,etc), nombre,
ingredientes (Sobre la base) y precio. (Ingredientes debe ser 
una lista). 

Crear una iteración del array que imprima en consola:
a) Las pizzas que tengan un id impar.
b) ¿Hay alguna pizza que valga menos de $600?
c) Los nombres de todos las pizzas.
d) Los precios de las pizzas.
e) El nombre de cada pizza con su respectivo precio.

Cada respuesta debe ser, como siempre, usuario friendly. 
Si (como en el punto B), la respuesta es un booleano, no 
imprimir el booleano. 
Manejemos esa respuesta, pensando en que un usuario 
va a leer eso. 

Por ejemplo: "La pizza X, tiene un valor de $XXXX”.*/

class pizza{
  constructor(id,nombre,ingredientes,precio,img)
  {
    this.id=id;
    this.nombre=nombre;
    this.ingredientes=ingredientes;
    this.precio=precio;
    this.imagen=img;
  }
}

const pepperoni=new pizza(1,'Pepperoni',['Muzzarela','Tomate','Orégano','Pepperoni','Bacon','Olivas Negras'],550,'https://placeralplato.com/files/2016/01/Pizza-con-pepperoni-640x480.jpg?width=1200&enable=upscale');
const carbonara=new pizza(2,'Carbonara',['Muzzarela','Orégano','Bacon','Cebolla','Champinones','Salsa Carbonara'],580,'https://www.comedera.com/wp-content/uploads/2022/04/pizza-carbonara.jpg');
const vegetal=new pizza(3,'Vegetal',['Muzzarela','Tomate','Orégano','Calabacin','Berenjena','Cebolla','Pimiento','Champinones'],310,'https://images.hola.com/imagenes/cocina/recetas/20200120158493/pizza-casera-vegetal/0-770-783/pizza-vegetariana-m.jpg');
const york=new pizza(4,'York',['Muzzarela','Tomate','Orégano','Jamón York','Champinones','Olivas'],285,'https://imag.bonviveur.com/primer-plano-de-la-pizza-prosciutto-o-de-jamon-cocido.jpg');
const hawaiana=new pizza(5,'Hawaiana',['Muzzarela','Tomate','Orégano','Jamón York','Piña'],950,'https://babycocina.com/wp-content/uploads/2021/02/pizza-hawaiana.jpg');
const yorkYbacon=new pizza(6,'York & Bacon',['Muzzarela','Tomate','Orégano','Bacon','Jamón York','Champinones','Cebolla','Olivas Negras'],230,'https://s4d-images.telepizza.es/Products/Original/_York_Bacon_Sin_Gluten-2390.png');
const bacon=new pizza(7,'Bacon',['Muzzarela','Tomate','Orégano','Bacon','Champinones','Cebolla'],930,'https://www.deliciosi.com/images/1300/1338/pizza-de-pollo.jpg');
const barbacoa=new pizza(8,'Barbacoa',['Muzzarela','Tomate','Orégano','Bacon','Ternera','Salsa Barbacoa'],1370,'https://www.unileverfoodsolutions.es/dam/global-ufs/mcos/SPAIN/calcmenu/recipes/ES-recipes/general/pizza-barbacoa/main-header.jpg');
const atun=new pizza(9,'Atún',['Muzzarela','Tomate','Orégano','Atún','Pimiento Rojo','Cebolla','Olivas Negras'],2350,'https://unareceta.com/wp-content/uploads/2014/05/receta-de-pizza-de-atun-640x427.jpg');
const quesoCabra=new pizza(10,'Queso Cabra',['Muzzarela','Tomate','Orégano','Edam','Gouda','Azul','Cabra','Cheddar'],680,'https://content-cocina.lecturas.com/medio/2018/11/23/paso_a_paso_para_realizar_pizza_de_queso_de_cabra_y_beicon_con_un_toque_de_miel_resultado_final_6e955824_800x800.jpg');
const pollo=new pizza(11,'Pollo',['Muzzarela','Tomate','Orégano','Pollo','Pimiento','Olivas','Cebolla'],1400,'https://images.hola.com/imagenes/cocina/recetas/20200123158802/receta-pizza-pollo-barbacoa/0-772-922/pizza-pollo-adobe-m.jpg');
const mejicana=new pizza(12,'Mejicana',['Muzzarela','Tomate','Orégano','Salsa Picante','Guindilla','Champinones','Ternera'],1600,'https://recetinas.com/wp-content/uploads/2022/07/pizza-mexicana.jpg');

const arrayPizza=[];

arrayPizza.push(pepperoni,carbonara,vegetal,york,hawaiana,yorkYbacon,bacon,barbacoa,atun,quesoCabra,pollo,mejicana);

//console.log(arrayPizza);

//Punto A

 const pizzaImpares = () => {
   arrayPizza.forEach(
      (pizza) => {
        if((pizza.id %2) !== 0)
        console.log(`ID:${pizza.id}, ${pizza.nombre}, sus ingredientes son: ${pizza.ingredientes}. Valor $${pizza.precio}`)
      }
    );
  }

  //console.log("A)Las Pizzas con ID impar son: ")
  //pizzaImpares();

//Punto B

const pizzaMenos600 = () => {
  arrayPizza.forEach((pizza) => {
    if(pizza.precio <= 600)
      console.log(`La pizza ${pizza.nombre} que tiene un valor de $${pizza.precio}`)
  })
}

//console.log("B)Las pizzas menores a $600 son: ")
//pizzaMenos600();

//Punto C

const nombresPizzas = () => {
  arrayPizza.forEach((pizza) => {
    console.log(`Pizza ${pizza.nombre}`)
  })
}

//console.log("C)Los nombres de las pizzas son: ")
//nombresPizzas();

//Punto D

const preciosPizza = () => {
  arrayPizza.forEach((pizza) => {
    console.log(`$${pizza.precio}`)
  })
}

//console.log("D)Los valores de las pizzas son: ")
//preciosPizza();

//Punto E

const preciosPizza1 = () => {
  arrayPizza.forEach((pizza) => {
    console.log(`Pizza ${pizza.nombre} $${pizza.precio}`)
  })
}

//console.log("E)Los valores de las pizzas son: ")
//preciosPizza1();

//Ejercicio 2

/*Vamos a utilizar el mismo array de objetos "Pizzas" del desafío general anterior. 
-Crear un archivo HTML que contenga un h2, un h4, un input number y un botón. 
-El desafío será, al tocar el botón, capturar el valor ingresado en el input.
Renderizar en el h2 el nombre y en el h4 el precio de la pizza cuyo id coincida con el numero ingresado en el input. 
-Si no coincide con ningún id, renderizar un mensaje de error. 
*/

const $inputPizza = document.getElementById('inputPizza');
const $buttonPizza = document.getElementById('button-pizza');
const $textPizza = document.getElementById('text-pizza');
const $valuePizza = document.getElementById('value-pizza');
const $imgPizza = document.getElementById('img-pizza')

const mostrarPizza = () => {
    const valorInput = $inputPizza.value;
    arrayPizza.forEach((pizza) => {
        if (valorInput == pizza.id) {
            // $textPizza.outerHTML = `<h2>Pizza ${pizza.nombre}</h2>`;
            // $valuePizza.outerHTML = `<h4>Precio: $${pizza.precio}</h4>`;
            // $imgPizza.outerHTML = `<img src='${pizza.imagen}' alt='${pizza.nombre}'>`;
            // return;
            $textPizza.innerHTML = `<h2>Pizza ${pizza.nombre}</h2>`;
            $valuePizza.innerHTML = `<h4>Precio: $${pizza.precio}</h4>`;
            $imgPizza.innerHTML = `<img src='${pizza.imagen}' alt='${pizza.nombre}'>`;
            return;
        }
    })
}


const isValidPizza = () => {
    let valid = false;
    const valorInput = $inputPizza.value;
    if (valorInput > arrayPizza.length) {
        mostrarError($inputPizza, `La pizza ${valorInput} no existe.`);
    } else {
        mostrarSuccess($inputPizza, '');
        valid = true;
    }
    return valid;
}

const mostrarError = (input, message) => {
    const inputNumber = input.parentElement;
    inputNumber.classList.remove('success')
    inputNumber.classList.add('error');
    const error = inputNumber.querySelector('small');
    error.textContent = message;
}

const mostrarSuccess = (input, message) => {
    const inputNumber = input.parentElement;
    inputNumber.classList.remove('error');
    inputNumber.classList.add('success');
    const error = inputNumber.querySelector('small');
    error.textContent = message;
}

const init = () => {
    $buttonPizza.addEventListener('click', () => {
        if(isValidPizza())
        {   
            mostrarPizza();
        }
    });
}

init();



