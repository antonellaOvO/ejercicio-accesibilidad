let btnAumentar = document.getElementById("btn-aumentar");
let btnDisminuir = document.getElementById("btn-disminuir");
let btnOscuro = document.getElementById("btn-oscuro");
let btnClaro = document.getElementById("btn-claro");
let cards = document.querySelectorAll(".card");
let imageCards = document.querySelectorAll(".card-img-top");
let borderAside = document.getElementById("border-aside");
let borderAsideReversed = document.getElementById("border-aside-reversed");

let tamaño = 16;
/*Función para aumentar tamaño de letra*/
function aumentar() {
  tamaño += 2;
  document.body.style.fontSize = tamaño + "px";
}
/*Función para disminuir tamaño de letra*/
function disminuir() {
  tamaño -= 2;
  document.body.style.fontSize = tamaño + "px";
}
/*Función para pasar a modo Oscuro (fondo negro y letra blanca)*/
function modoOscuro() {
  document.body.style.color = "white";
  document.body.style.background = "black";
  borderAside.setAttribute(
    "class",
    "col-2 border-aside border-end border-white border-5"
  );
  borderAsideReversed.setAttribute(
    "class",
    "col-2 border-aside border-start border-white border-5"
  );
  cards.forEach(function (card) {
    card.setAttribute("class", "card text-white bg-dark border-white");
  });
  imageCards.forEach(function (image) {
    image.setAttribute(
      "class",
      "card-img-top border border-white border-top border-5"
    );
  });
}
/*Función para pasar a modo Oscuro (al estado anterior de modo Oscuro- es decir, al style original)*/
function modoClaro() {
  document.body.style.color = "black";
  document.body.style.background = "white";
  cards.forEach(function (card) {
    card.setAttribute("class", "card");
  });
  imageCards.forEach(function (image) {
    image.setAttribute("class", "card-img-top");
  });
}
/*Eventos para ejecutar las funciones de los correspondientes botones*/
btnAumentar.addEventListener("click", aumentar);
btnDisminuir.addEventListener("click", disminuir);
btnOscuro.addEventListener("click", modoOscuro);
btnClaro.addEventListener("click", modoClaro);
