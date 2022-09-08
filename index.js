    let respuesta;

    //Ciclo while: solicitando al usuario información mediante un prompt hasta que se cumpla la condición
    while (respuesta != "4") {
        respuesta = prompt("Cuanto es dos mas dos?");
    }

console.log('success!');

//Objeto
usuario =  {
	nombre: "Fulanito",
	edad: 3, 
	comidasFavoritas: ["Pollo", "Palta"]
}

//Esta función imprime todos los valores de las claves de un Objeto. En caso de ser un array esta función lo recorre y tambien imprime sus valores internos. 
function imprimirElementoPorElementoObjeto(obj){
	const arr = Object.values(obj);
	for(let i = 0; i < arr.length; i++){
        if (Array.isArray(arr[i])) {
            arr[i].forEach(element => {
                console.log(element);
            });
        } else {
            console.log(arr[i])
        }
	}
}


imprimirElementoPorElementoObjeto(usuario);

//Experimentando con dos formas de validar el tipo de suscripción
function conseguirTipoSuscripcion(suscripcion) {
    if (suscripcion == 'Free') {
        console.log("Solo puedes tomar los cursos gratis");
        return;
    }
    
    if (suscripcion == 'Basic') {
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
        return;
    }
    
    if (suscripcion == 'Expert') {
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
        return;
    }
    
    if (suscripcion == 'ExpertDuo') {
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
        return;
    }

    console.warn('Ese tipo de suscripción no existe')
}

const tiposDeSuscripciones = {
    free: "Solo puedes tomar los cursos gratis",
    basic: "Puedes tomar casi todos los cursos de Platzi durante un mes",
    expert:"Puedes tomar casi todos los cursos de Platzi durante un año",
    expertDuo: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año",
}

//Formas de acceder al valor de una clave de un objeto.
//1
console.log(tiposDeSuscripciones.free);
//2
tiposDeSuscripciones['free'];
//3
const ejemploSuscripcion = "free";
tiposDeSuscripciones[ejemploSuscripcion];

//Esta función esta más abierta a la extensión que la anterior. En caso de se añada una nueva suscripción es tan simple como modificar el Objeto. En la otra función habría que modificar a la función.
function conseguirTipoSuscripcionInput(suscripcion){
    
    if(tiposDeSuscripciones[suscripcion]){
        console.log(tiposDeSuscripciones[suscripcion]);
        return;
    }
    console.warn("La suscripcion '" +suscripcion +  "' no existe");
}

//Probando
conseguirTipoSuscripcionInput('free');
conseguirTipoSuscripcionInput('expertDuo');
conseguirTipoSuscripcionInput('lalala');

//Obteniendo elementos del DOM
const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');
const inputModifier = document.querySelector('#modificador');



//Visualizando diferencias entre innerHTML e innerText
h1.innerHTML = 'Patito<br>Feo';
h2.innerText = 'Patito<br>Feo';

//Probando el método setAttribute y getAttribute
h1.setAttribute('class', 'rojo');
console.log( h1.getAttribute('pantalla'));
console.log( h1.getAttribute('class'));

//Conociendo classList y sus metodos básicos (add, remove, toggle, contains)
h1.classList.add('rojo');
h1.classList.remove('rojo');
h1.classList.toggle('verde');
//contains -> returns true/false 
h1.classList.contains('verde');


//Aprendiendo como crear elementos desde JS
//Creando imagen
const img = document.createElement('img');

//Agregando atributo src
img.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD9tXpvu6H6T2EW33UeB4gyBbMyPAl_L9AYlKDemXrhQ&s');

//Adjuntando la imagen a un parrafo
pid.append(img);

//Ó podemos reemplazar el contenido de todo el parrafo con la imagen
pid.replaceWith(img);
