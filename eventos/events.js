//Obteniendo elementos del DOM
const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const resultado = document.querySelector('#result');
const form = document.querySelector('form');

console.log({h1, input1, input2, btn});

//Adjuntando un controlador de eventos a un elemento. En caso de que suceda el evento se ejecuta una función pasada como argumento.
form.addEventListener('submit', sumarInputValues);

//La función que se ejecuta en caso de que el evento suceda
function sumarInputValues(event){
    console.log({event});
    event.preventDefault();
    let resultadoParcial = Number(input1.value) + Number(input2.value);
    if (isNaN(resultadoParcial)) {
        return resultado.innerText = 'Por favor ingresa solo numeros'
    }
    return resultado.innerText = resultadoParcial;
}

