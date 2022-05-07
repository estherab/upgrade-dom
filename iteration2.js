// 2.1 Inserta dinámicamente en un html un div vacio con javascript.
let div1 = document.createElement("div");
document.body.appendChild(div1);

// 2.2 Inserta dinámicamente en un html un div que contenga una p con javascript.
let newP = document.createElement("p");
newP.innerText = "P dentro de DIV 2.2";
let div2 = document.createElement("div");

div2.appendChild(newP);
document.body.appendChild(div2);

// 2.3 Inserta dinámicamente en un html un div que contenga 6 p utilizando un loop con javascript.
let div3 = document.createElement("div");
div3.innerText = "DIV 2.3"

for (let i = 0; i < 6; i++) {
    let pLoop = document.createElement("p")
    pLoop.innerText = "p nº" + (i+1);
    div3.appendChild(pLoop);
}

document.body.append(div3);

// 2.4 Inserta dinámicamente con javascript en un html una p con el texto 'Soy dinámico!'
let p4 = document.createElement("p");
p4.innerText = "Soy dinámico!";

document.body.appendChild(p4);

// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
let h = document.querySelector("h2.fn-insert-here");
h.innerText = "Wubba Lubba dub dub";

// 2.6 Basándote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

ul = document.createElement("ul");

for (let i = 0; i < apps.length; i++) {
    let li = document.createElement("li");
    li.innerText = apps[i];
    ul.appendChild(li);
}

document.body.appendChild(ul);

// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
let list = document.querySelectorAll(".fn-remove-me");

for (let i = 0; i < list.length; i++) {
    document.body.removeChild(list[i]);
}

// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
// Recuerda que no solo puedes insertar elementos con .appendChild.
let div8 = document.querySelectorAll("div.fn-insert-here")[1];

let p8 = document.createElement("p");
p8.innerText = "Voy en medio!";
document.body.insertBefore(p8, div8);

// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here
listDivs = document.querySelectorAll("div.fn-insert-here");

for (let i = 0; i < listDivs.length; i++) {
    let p = document.createElement("p");
    p.innerText = "Voy dentro!";
    listDivs[i].appendChild(p);
} 