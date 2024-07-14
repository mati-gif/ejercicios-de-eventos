//1. Crea una aplicación que muestre un cuadrado gris. 
//Debe tener un botón “Cambiar”, que al hacer clic en él, el color de relleno del cuadrado debe cambiar a azul claro.

// let divMain = document.querySelector("#div-main")

// let divBox = document.createElement("div");
// divBox.classList.add("div","bg-gray-500","w-44","h-52");

// divMain.appendChild(divBox);
// console.log(divMain);

// let button = document.createElement("button");
// button.classList.add("w-40","bg-gray-200" ,"border-2", "border-black","mt-5")
// button.innerHTML = "click here"
// button.id = "button"

// divMain.appendChild(button);
// console.log(divMain);




// let llamarBoton = document.getElementById("button");
// console.log(llamarBoton);

// let cuadradoGris = document.querySelector(".div");
// console.log(cuadradoGris);






// let colorRojo = false; //defini una variable llamada colorRojo y le dije que por defecto iba a ser falsa


// function llamar(){

// if(colorRojo === false){
//     cuadradoGris.style.backgroundColor = "#f12"
//     cuadradoGris.innerHTML = "rojo"
//     colorRojo = true;
// } else  {
//     cuadradoGris.style.backgroundColor = '#48e';
//     cuadradoGris.innerHTML = "azul"
//     colorRojo = false;



// }

// // switch (colorRojo ) {
// //     case false:
// //         cuadradoGris.style.backgroundColor = "#f12"
// //         cuadradoGris.innerHTML = "rojo"
// //         colorRojo = true;

// //         break;

// //     case true:
// //         cuadradoGris.style.backgroundColor = '#48e';
// //         cuadradoGris.innerHTML = "azul";
// //         colorRojo = false;

// //         break;
// //         default:
// //         cuadradoGris.style.backgroundColor = 'gray';
// //         // cuadradoGris.innerHTML = "azul";
// //         break;

// // }
// }

    
// llamarBoton.addEventListener("click",llamar);







//2. Crea una aplicación que muestre un cuadrado gris. 
//Debe tener una entrada de texto y al escribir en ella,
// lo que se escribe debe aparecer impreso dentro del cuadrado.





// let divMain = document.querySelector("#div-main")

// let divBox = document.createElement("div");
// divBox.classList.add("div","bg-gray-500","w-44","h-52");

// divMain.appendChild(divBox);
// console.log(divMain);


// let input = document.createElement("input");
// input.type = "text";
// input.classList.add("input","w-44","bg-white-800","border-2", "border-black","mt-5");
// console.log(input);

// divMain.appendChild(input);
// console.log(divMain);



// let button = document.createElement("button")
// button.classList.add("w-40","bg-gray-200" ,"border-2", "border-black","mt-5")
// button.innerHTML = "borrar"
// button.id = "button"

// divMain.appendChild(button);
// console.log(divMain);



// let llamarInput = document.querySelector(".input")


// cuadradoGris = document.querySelector(".div");
// console.log(cuadradoGris);


// llamarBoton = document.getElementById("button");
// console.log(llamarBoton);




// function escribir(){

//     let text = llamarInput.value ;
//     cuadradoGris.innerHTML = text;
// }

// llamarInput.addEventListener("input",escribir);


// function borrar(){
// let delate = " ";

// cuadradoGris.innerHTML = delate;
// input.value = delate;
// }

// llamarBoton.addEventListener("click",borrar);





//3. Crea una aplicación que calcule el índice de masa corporal.
// Al pulsar el botón “calcular”, debería mostrar el resultado en la entrada correspondiente.

// //llamando al div principal
// let divMain = document.querySelector("#div-main");


// //creando el div (en los primeros ejercicios era el que tenia un background red)
// let divBox = document.createElement("div");
// divBox.classList.add("div","border-2", "border-black","w-52","h-56");

// //meto en el div main div box
// divMain.appendChild(divBox);
// console.log(divMain);

// //creando h3 llamado estatura.

// let estatura = document.createElement("h3");
// estatura.innerHTML = "estatura"
// estatura.classList.add("text-2xl")
// divBox.appendChild(estatura);

// //creando el h5.
// let enCentimetros = document.createElement("h5")
// enCentimetros.innerHTML = " en centimetro"
// divBox.appendChild(enCentimetros);



// //creando el input estatura
// let input = document.createElement("input");
// input.type = "number";
// input.classList.add("inputEstatura","w-full","bg-white-800","border-2", "border-black","mt-5");
// console.log(input);

// divBox.appendChild(input);
// console.log(divMain);




// //creando h3 llamado peso.

// let peso = document.createElement("h3");
// peso.innerHTML = "peso"
// peso.classList.add("text-2xl")
// divBox.appendChild(peso);

// //creando el h5.
// let enKilo = document.createElement("h5")
// enKilo.innerHTML = " en kilogramos"
// divBox.appendChild(enKilo);





// //creando el input peso
// let inputPeso = document.createElement("input");
// inputPeso.type = "number";
// inputPeso.classList.add("inputPeso","w-full","bg-white-800","border-2", "border-black","mt-5");
// console.log(inputPeso);

// divBox.appendChild(inputPeso);
// console.log(divMain);


// let button = document.createElement("button")
// button.classList.add("w-40","bg-gray-200" ,"border-2", "border-black","mt-5")
// button.innerHTML = "calcular"
// button.id = "button"

// divMain.appendChild(button);
// console.log(divMain);


// //creando el div 2 donde se va a mostrar el resultado.
// let divBox2 = document.createElement("div");
// divBox2.classList.add("div2","border-2","bg-red-200", "border-black","w-44","h-52");

// divMain.appendChild(divBox2);
// // console.log(divMain);

// //creando el h3 resultado 


// let resultado = document.createElement("h3");
// resultado.innerHTML = "resultado"
// resultado.classList.add("text-2xl")
// divBox2.appendChild(resultado);
// //creando el input donde se va a mostrar el resultado.

// let inputResultado = document.createElement("input");
// inputResultado.type = "number";
// inputResultado.classList.add("inputResultado","w-full","bg-white-800","border-2", "border-black","mt-5");

// divBox2.appendChild(inputResultado);









// llamarBoton = document.getElementById("button");

// let inputHeight = document.querySelector(".inputEstatura");


// let inputWeight = document.querySelector(".inputPeso");


// let inputResult = document.querySelector(".inputResultado");


// function multiplicar(){




// let weigth = inputWeight.value;
// let height = inputHeight.value;

// let result = parseFloat((weigth *  height));

// return inputResult.value = result

// }


// llamarBoton.addEventListener("click",multiplicar)





//4. Crear una aplicación de conversión de monedas.
//Tomando por defecto 1 dólar = 500 (peso argentino, chileno, uruguayo, etc.).
//El usuario debe poder ingresar un monto en moneda local y éste debe ser convertido a su equivalente en dólares.


// //llamando al div principal
let divMain = document.querySelector("#div-main");

// //creando el div (en los primeros ejercicios era el que tenia un background red)
let divBox = document.createElement("div");
divBox.classList.add("div","border-2", "border-black","w-56","h-80","bg-blue-100");

// //meto en el div main div box
divMain.appendChild(divBox);
console.log(divMain);

// //creando h3 llamado monto moneda local

let pesoArgentino = document.createElement("h3");
pesoArgentino.innerHTML = "monto moneda local"
pesoArgentino.classList.add("text-2xl")
divBox.appendChild(pesoArgentino);

// //creando el h5.
let sinComasNiPuntos = document.createElement("h5")
sinComasNiPuntos.innerHTML = " sin comas ni puntos"
divBox.appendChild(sinComasNiPuntos);



// //creando el input moneda local
let inputMonedaLocal = document.createElement("input");
inputMonedaLocal.type = "number";
inputMonedaLocal.classList.add("inputMonedaLocal","w-full","bg-white-800","border-2", "border-black","mt-5");
console.log(inputMonedaLocal);

divBox.appendChild(inputMonedaLocal);
console.log(divMain);






// //creando h3 llamado dolares.

let dolares = document.createElement("h3");
dolares.innerHTML = "ingrese monto en dolares"
dolares.classList.add("text-2xl")
divBox.appendChild(dolares);

// //creando el h5.
let sinPuntosNiComas = document.createElement("h5")
sinPuntosNiComas.innerHTML = " sin puntos ni comas"
divBox.appendChild(sinPuntosNiComas);



// //creando el input dolares
let inputDolares = document.createElement("input");
inputDolares.type = "number";
inputDolares.classList.add("inputDolares","w-full","bg-white-800","border-2", "border-black","mt-5");
console.log(inputDolares);

divBox.appendChild(inputDolares);
// console.log(divMain);


//creando el button convertir

let button = document.createElement("button")
button.classList.add("w-20","bg-gray-200" ,"border-2", "border-black","mt-5")
button.innerHTML = "convertir"
button.id = "buttonConvertir"

divBox.appendChild(button);
// console.log(divMain);

//creando el button delate
let buttonDelate = document.createElement("button")
buttonDelate.classList.add("w-20","bg-gray-200" ,"border-2", "border-black","ml-5")
buttonDelate.innerHTML = "delate"
buttonDelate.id = "buttonDelate"

divBox.appendChild(buttonDelate);

console.log(divBox);














// //creando el div 2 donde se va a mostrar el resultado.
let divBox2 = document.createElement("div");
divBox2.classList.add("div2","border-2","bg-red-200", "border-black","w-56","h-80");

divMain.appendChild(divBox2);
// // console.log(divMain);



// //creando h3 llamado dolares del div 2.

let dolares2 = document.createElement("h3");
dolares2.innerHTML = "ingrese monto en dolares"
dolares2.classList.add("text-2xl")
divBox2.appendChild(dolares2);

// //creando el h5 del div 2.
let sinPuntosNiComas2 = document.createElement("h5")
sinPuntosNiComas2.innerHTML = " sin puntos ni comas"
divBox2.appendChild(sinPuntosNiComas2);



// //creando el input dolares del div 2
let inputDolares2 = document.createElement("input");
inputDolares2.type = "number";
inputDolares2.classList.add("inputDolares2","w-full","bg-white-800","border-2", "border-black","mt-5");
console.log(inputDolares2);

divBox2.appendChild(inputDolares2);
// console.log(divMain);



// //creando h3 llamado monto moneda local del div 2

let pesoArgentino2 = document.createElement("h3");
pesoArgentino2.innerHTML = "monto moneda local"
pesoArgentino2.classList.add("text-2xl")
divBox2.appendChild(pesoArgentino2);

// //creando el h5 del div 2.
let sinComasNiPuntos2 = document.createElement("h5")
sinComasNiPuntos2.innerHTML = " sin comas ni puntos"
divBox2.appendChild(sinComasNiPuntos2);



// //creando el input moneda local del div 2
let inputMonedaLocal2 = document.createElement("input");
inputMonedaLocal2.type = "number";
inputMonedaLocal2.classList.add("inputMonedaLocal2","w-full","bg-white-800","border-2", "border-black","mt-5");
console.log(inputMonedaLocal2);

divBox2.appendChild(inputMonedaLocal2);
console.log(divMain);



//creando el button convertir del div 2 

let button2 = document.createElement("button")
button2.classList.add("w-20","bg-gray-200" ,"border-2", "border-black","mt-5")
button2.innerHTML = "convertir"
button2.id = "buttonConvertir2"

divBox2.appendChild(button2);
// console.log(divMain);



//creando el button delate del div 2 
let buttonDelate2 = document.createElement("button")
buttonDelate2.classList.add("w-20","bg-gray-200" ,"border-2", "border-black","ml-5")
buttonDelate2.innerHTML = "delate"
buttonDelate2.id = "buttonDelate2"

divBox2.appendChild(buttonDelate2);







let buttonCovertDiv1 = document.getElementById("buttonConvertir");
console.log(buttonCovertDiv1);


let inputPesos = document.querySelector(".inputMonedaLocal")
console.log(inputMonedaLocal);

let inputDol = document.querySelector(".inputDolares");
console.log(inputDolares);

function dePesosAdolar(){


let pesos = parseFloat(inputPesos.value);
let dol = inputDol;


let resultado = pesos / 500 ;

return dol.value = resultado;


}

buttonCovertDiv1.addEventListener("click", dePesosAdolar);





let buttonDelateDiv1 = document.getElementById("buttonDelate");
console.log(buttonDelateDiv1);
// let divBoxrosa = document.querySelector(".div");

function delate(){

    let borrar = "";
    let  borrarPesos = inputPesos;
    let borrarDolares = inputDol;

    borrarPesos.value = borrar;
    borrarDolares.value = borrar;



}   


buttonDelateDiv1.addEventListener("click",delate);







let buttonConvertDiv2 = document.getElementById("buttonConvertir2");
let inputDol2 = document.querySelector(".inputDolares2");
console.log(inputDol2);
let inputPesos2 = document.querySelector(".inputMonedaLocal2");
console.log(inputPesos2);

function deDolarAPesos(){


    let dol2 = parseFloat(inputDol2.value);
    let pesos2 = inputPesos2;

    let resultado2 = dol2 * 500 ;

    return pesos2.value = resultado2;
}


buttonConvertDiv2.addEventListener("click", deDolarAPesos)



let buttonDelateDiv2 = document.getElementById("buttonDelate2");
console.log(buttonDelate2);


function delateSecondDiv(){

let delate = "" ;

let delatePesos = inputPesos2;
let delateDolares = inputDol2;


    delatePesos.value = delate;
    delateDolares.value = delate;

}

buttonDelateDiv2.addEventListener("click", delateSecondDiv);
