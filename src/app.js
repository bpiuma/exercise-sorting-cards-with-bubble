/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {};

let btnDraw = document.querySelector(".draw");
let btnSort = document.querySelector(".sort");
let input = document.querySelector(".input");

btnDraw.addEventListener("click", function() {});

btnSort.addEventListener("click", function() {});

function generarCarta(indFig, indNum) {
  var figuras = ["♦", "♥", "♠", "♣"];
  var numeros = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  var indiceFigura = Math.floor(Math.random() * figuras.length);
  var indiceNumero = Math.floor(Math.random() * numeros.length);

  if (indiceFigura <= 1) {
    figura.style.color = "red";
    figuraInv.style.color = "red";
    numero.style.color = "red";
  }

  let carta =
    '<div class="carta bg-white d-flex flex-column justify-content-between"><div class="figura"><h1>' +
    figuras[indiceFigura] +
    '</h1></div><div class="numero d-flex justify-content-center"><h1>' +
    numeros[indiceNumero] +
    '</h1></div><div class="figura invertida float-right"><h1>' +
    figuras[indiceFigura] +
    "</h1></div></div>";

  return carta;
}

function randomNF(figuras, numeros, cantidad) {
  let arreglo = [[]];
  //let arrNumero = [];
  for (let i = 0; i < cantidad; i++) {
    arreglo.push([
      (Math.floor(Math.random() * figuras.length),
      Math.floor(Math.random() * numeros.length))
    ]);
  }
}

let contenedor1 = document.querySelector(".desordenado");
contenedor1.innerHTML = carta;
