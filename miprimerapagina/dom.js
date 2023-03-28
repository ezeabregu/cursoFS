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

// const titulo = document.getElementById('h1')
// titulo.innerHTML="Ejercicios en el DOM"
// //console.dir(titulo);

// const parrafo = document.getElementById('p')
// parrafo.innerHTML="Agregamos texto desde el JS"
// //console.dir(parrafo)

// const divisor = document.getElementById('div')
// divisor.innerHTML="Esto está en un DIV vacío."
// //console.dir(divisor)

// const email = document.getElementById('email')
// email.defaultValue="habregu@iptel.com.ar"
// //console.dir(email)

// const passw = document.getElementById('password')
// passw.defaultValue="Alt4C0ntr4s3ñ4!"
// //console.dir(passw)

// const texto = document.getElementById('text')
// texto.defaultValue="La contraseña es: Alt4C0ntr4s3ñ4!"
// //console.dir(texto)

// const check = document.getElementById('checkbox')
// check.defaultChecked=true
// //console.dir(check)

// const numero = document.getElementById('number')
// numero.defaultValue=2023
//console.dir(email)

/*
*Crear un HTML con un H1 y un p.
*Tanto el H1 como el p deben tener texto en su interior.
*Crear un CSS con estilos que le den color.

Con lo visto en clase, lograr que, luego de 3 segundos 
de cargada la pagina, el h1 cambie de color y cambiar 
el texto dentro del p.
*/

// const tituloh2 = document.getElementById('tituloCambia')
// const parrafoP = document.getElementById('textoCambia')
// console.dir(tituloh2)
// setTimeout(()=>{
//     tituloh2.style.color='#ffff00'
//     parrafoP.innerHTML="Valores de string nuevos, cargados desde el JS despues de 3 segundos."
// },3000);

/*
-Crear un archivo HTML que contenga un input mail y un input password.
-Validar que el primero sea un mail válido.
-Validar que el segundo tenga un mínimo de 5 y un máximo de 12 caracteres.
 */

const form = document.getElementById('formulario')
const emailInput = document.getElementById('email')
const passInput = document.getElementById('password')

const checkEmail = () => {
   let valid=false;
   const emailValue=emailInput.value.trim();        
   if(!isEmpty(emailValue)) 
    {
        showError(emailInput,'El EMAIL es obligatorio.')
    }
    else if(!isEmailValid(emailValue))
    {
        showError(emailInput, 'El EMAIL no es válido.')
    }
    else
    {
        showSuccess(emailInput);
        valid = true;
    }
    return valid;
}

const checkPass = () => {
    let valid = false;
    const passValue = passInput.value.trim();
    if(!isEmpty(passValue))
    {
        showError(passInput, 'La contraseña es obligatoria.');
    }
    else if(!isPasswordValid(passValue))
    {
        showError(passInput, 'La contraseña debe tener entre 5 y 12 caracteres, una mayuscula, una minuscula y un simbolo.')
    }
    else
    {
        showSuccess(passInput);
        valid = true;
    }
    return valid;
}

const isEmpty = value => (value === ''?false:true);

const isEmailValid = email => {
    let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    return re.test(email);
}

const isPasswordValid = pass => {
    let re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{5,12}$/;
    return re.test(pass);
}

const showError = (input, message) => {
    const formField = input.parentElement;
    formField.classList.remove('success');
    formField.classList.add('error');
    const error = formField.querySelector('small');
    error.textContent = message;
};
  

const showSuccess = input => {
    const formField = input.parentElement;
    formField.classList.remove('error');
    formField.classList.add('success');
    const error = formField.querySelector('small');
    error.textContent = '';
};

form.addEventListener('submit', e => {
    // Prevenimos por defecto el comportamiento al enviar el form
    e.preventDefault();
  
    let isEmailValid = checkEmail();
    let isPasswordValid = checkPass();
  
    console.log(isEmailValid, isPasswordValid);
  
    //Guardar todos los estados de los inputs en una sola variable
    let isFormValid = isEmailValid && isPasswordValid;
  
    // Si todos los campos son validos, "Enviamos" el formulario
    if (isFormValid) {
      alert('Exito');
      form.submit();
    }
});

const debounce = (fn, delay = 500) => {
    let timeoutId;
    return (...args) => {
      // Cancelar el timer anterior
      if (timeoutId) clearTimeout(timeoutId);
  
      // Setear un nuevo timer
      timeoutId = setTimeout(() => {
        fn.apply(null, args);
      }, delay);
    };
};
  
form.addEventListener(
    'input',
    debounce(e => {
      switch (e.target.id) {
        case 'email':
          checkEmail();
          break;
        case 'password':
          checkPass();
          break;
      }
    })
);