// 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme
console.log("Elemento con clase showme: ", document.querySelector(".showme"));

// 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
console.log("Elemento con id pillado: ", document.querySelector("#pillado"));

// 1.3 Usa querySelector para mostrar por consola todos los p
let arrayP = document.querySelectorAll("p");

for (let i = 0; i < arrayP.length; i++) {
    console.log("p", i, "-", arrayP[i].innerHTML);
}

// 1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon
let pokemon = document.querySelectorAll(".pokemon");

for (let i = 0; i < pokemon.length; i++) {
    console.log("pokemon", i, "-", pokemon[i].innerHTML);
}

// 1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo 
// data-function="testMe".
let testMe = document.querySelectorAll('[data-function="testMe"]');

for (let i = 0; i < testMe.length; i++) {
    console.log("testMe", i, "-", testMe[i].innerHTML);
}

// 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
// data-function="testMe".
let testMe3 = document.querySelectorAll('[data-function="testMe"]')[2];
console.log("3er elemento testMe:", testMe3.innerHTML);

