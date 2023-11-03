"use strict";

// De momento he puesto que vaya cambiando los colores al cargar la página, yo creo que luego hay que cambiarlo para que sea despues de sumar o quitar puntos*/
window.addEventListener("load", cargarColores);

const cajas_colores = [
  [
    { rojo_1: "rgb(255, 0, 0)" }, // Roja
    { rojo_2: "rgb(220, 0, 0)" }, // Roja con variación
    { rojo_3: "rgb(255, 50, 50)" }, // Roja con variación
  ],
  [
    { verde_1: "rgb(0, 128, 0)" }, // Verde
    { verde_2: "rgb(0, 100, 0)" }, // Verde con variación
    { verde_3: "rgb(50, 150, 50)" }, // Verde con variación
  ],
  [
    { amarillo_1: "rgb(255, 255, 0)" }, // Amarilla
    { amarillo_2: "rgb(220, 220, 0)" }, // Amarilla con variación
    { amarillo_3: "rgb(255, 255, 50)" }, // Amarilla con variación
  ],
  [
    { violeta_1: "rgb(128, 0, 128)" }, // Violeta
    { violeta_2: "rgb(100, 0, 100)" }, // Violeta con variación
    { violeta_3: "rgb(150, 50, 150)" }, // Violeta con variación
  ],
  [
    { naranja_1: "rgb(255, 165, 0)" }, // Naranja
    { naranja_2: "rgb(220, 145, 0)" }, // Naranja con variación
    { naranja_3: "rgb(255, 185, 50)" }, // Naranja con variación
  ],
];

//Función para aplicar colores a las cajas (modifica el html y pone un estilo en linea con background-color: "el que toque")
function aplicarColores(colores) {
  //identificamos las cajas que se van a colorear
  const caja1 = document.getElementById("caja1");
  const caja2 = document.getElementById("caja2");
  const caja3 = document.getElementById("caja3");

  //vamos "coloreando" cada caja
  caja1.style.backgroundColor = colores[0]; //lo de colores 0,1,2 es para que coloree según grupos de color (los violeta, los verdes...)
  caja2.style.backgroundColor = colores[1];
  caja3.style.backgroundColor = colores[2];
}

// Función para seleccionar colores aleatorios pero que los muestra por grupos (los rojos. los amarillos...)
function seleccionarColoresAleatorios() {
  const coloresAleatorios = cajas_colores[
    Math.floor(Math.random() * cajas_colores.length)
  ].map((variacion) => Object.values(variacion)[0]);
  return coloresAleatorios;
}

//Función para recorrer el array de colores y aplicar los colores(guarda en variable los colores aleatorios que obtiene de la funcionseleccionarColoresAleatorios() y esa variable la usa como parámetro en la funcion aplicarColores() para que sepa qué colores tiene que pintar
function recorrer_array() {
<<<<<<< HEAD
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < cajas_colores[i].length; j++) {
      const caja = cajas_colores[i][j];
      console.log(`Caja ${i + 1}, Variación ${j + 1}: ${JSON.stringify(caja)}`);
    }
  }
}

//función que da una caja aleatoria de cada color
function imprimir_cajas_aleatorias() {
  for (let i = 0; i < cajas_colores.length; i++) {
    const colorVariations = cajas_colores[i];
    const randomIndex = Math.floor(Math.random() * colorVariations.length);
    const randomColor = colorVariations[randomIndex];
    const colorName = Object.keys(randomColor)[0];
    const colorValue = randomColor[colorName];
    console.log(`Caja de color ${colorName}: ${colorValue}`);
  }
}

// Llama a la función para imprimir las cajas aleatorias
imprimir_cajas_aleatorias();

//llamada a la función que recorre el array
recorrer_array(cajas_colores);

///
// creamos el contador para llevar los logros y fallos
///

let contadorGanar = 0;
let contadorFallar = 0;

// Función para incrementar el contador de ganar
function incrementarGanar() {
  contadorGanar++;
  document.getElementById("emoticonGanar").innerHTML = "😃 " + contadorGanar;
}

// Función para incrementar el contador de fallar
function incrementarFallar() {
  contadorFallar++;
  document.getElementById("emoticonFallar").innerHTML = "😔 " + contadorFallar;
}

// Ejemplo de uso
incrementarGanar(); // Incrementar contador de ganar
incrementarFallar(); // Incrementar contador de fallar
incrementarFallar(); // Incrementar contador de fallar

// Si el jugador gana
if (jugadorGana) {
  incrementarGanar();
} else {
  incrementarFallar();
}
=======
  const coloresAleatorios = seleccionarColoresAleatorios();
  aplicarColores(coloresAleatorios);
}

// Función que selecciona colores aleatorios, la llamamos cuando se actualice la página y así vuelve a buscar otro grupo de colores
function cargarColores() {
  const coloresAleatorios = seleccionarColoresAleatorios();
  aplicarColores(coloresAleatorios);
}
>>>>>>> main
