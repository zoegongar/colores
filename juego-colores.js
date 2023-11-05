"use strict";

//Creamos evento para que se ejecute nada más cargar pantalla
window.addEventListener("load", iniciarJuego);

//Dentro de iniciarJuego() están las otras funciones. Como una funcion llama a otra fuí eliminando funciones de aqui
function iniciarJuego() {
  generarCodigoRGB(); //la que pone el texto RGB
}

//Genera un código RGB aleatorio
function generarCodigoRGB() {
  //Se crean 3 constantes para generar los 3 códigos (r, g y b)
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  //identificamos en qué parte de HTML va el códigoRGB y lo guardamos en variable llamada CodigoRGB
  const CodigoRGB = document.getElementById("codigo");
  //Imprimimos en pantalla el código RGB (la pregunta)
  CodigoRGB.textContent = `${r}, ${g}, ${b}`;

  //Ejecutamos la funcion que crea colores para pintar las cajas y pasamos valores r g b para usarlos en esa función
  obtenerColoresAleatorios(r, g, b);
}

function obtenerColoresAleatorios(r, g, b) {
  //Basándonos en el código RGB creado de la funcion generarCodigoRGB() creamos el color correcto (la respuesta que seria correcta) y sus variaciones:
  const colorCorrecto = `rgb(${r}, ${g}, ${b})`;

  //Creamos 2 variaciones más y así tendríamos 3 colores que pintar en las cajas
  //En vez de que genere aleatorio le sumamos o restamos valores para que se parezcan
  const colorVariante1 = `rgb(${r + 15}, ${g - 20}, ${b - 15})`;
  const colorVariante2 = `rgb(${r - 20}, ${g + 10}, ${b + 10})`;

  //pasamos los colores generados (colorCorrecto, colorVariante1 y colorVariante2) como argumento y llamamos a la función que colorea las cajas
  generarColores(colorCorrecto, colorVariante1, colorVariante2);
}

function generarColores(colorCorrecto, colorVariante1, colorVariante2) {
  //Identificamos dónde tiene que pintar los colores
  const caja1 = document.getElementById("caja1");
  const caja2 = document.getElementById("caja2");
  const caja3 = document.getElementById("caja3");

  //Ahora que sabemos dónde van los colores, pintamos las cajas, los colores los saca de otra funcion, obtenerColoresAleatorios(r, g, b)
  caja1.style.backgroundColor = colorCorrecto;
  caja2.style.backgroundColor = colorVariante1;
  caja3.style.backgroundColor = colorVariante2;

  //Lammamos a la funcion verificar respuesta y le pasamos los colores que tienen las cajas
  verificarRespuesta(colorCorrecto, colorVariante1, colorVariante2);
}

//Estas variables son para el contador de aciertos y fallos
let aciertos = 0;
let fallos = 0;

function verificarRespuesta(colorCorrecto, colorVariante1, colorVariante2) {
  //Identificamos dónde están los marcadores de acierto/fallo
  const ContadorAciertos = document.getElementById("contador-aciertos");
  const ContadorFallos = document.getElementById("contador-fallos");

  caja1.addEventListener("click", () => {
    //Sumamos 1 si el color corresponde y si contador es menor a 3
    if (caja1.style.backgroundColor === colorCorrecto && aciertos < 3) {
      aciertos++;
      ContadorAciertos.textContent = aciertos;
      //Si llegamos a 3 aciertos sale un alert y se reinician contadores y juego
      if (aciertos === 3) {
        alert("🏆 🏆¡Enhorabuena, has ganado! 🏆 🏆");
        reiniciarJuego(); //Esta funcion es para reiniciar, quitar eventos y demás
      }
    } else if (caja1.style.backgroundColor !== colorCorrecto && fallos < 3) {
      fallos++;
      ContadorFallos.textContent = fallos;
      //Si llegamos a 3 fallos sale un alert y se reinician contadores y juego
      if (fallos === 3) {
        alert("💩 💩 BUUUU mantaaa 💩 💩");
        reiniciarJuego();
      }
    }
  });

  caja2.addEventListener("click", () => {
    if (caja2.style.backgroundColor === colorCorrecto && aciertos < 3) {
      aciertos++;
      ContadorAciertos.textContent = aciertos;
      if (aciertos === 3) {
        alert("🏆 🏆¡Enhorabuena, has ganado! 🏆 🏆");
        reiniciarJuego();
      }
    } else if (caja2.style.backgroundColor !== colorCorrecto && fallos < 3) {
      fallos++;
      ContadorFallos.textContent = fallos;
      if (fallos === 3) {
        alert("💩 💩 BUUUU mantaaa 💩 💩");
        reiniciarJuego();
      }
    }
  });

  caja3.addEventListener("click", () => {
    if (caja3.style.backgroundColor === colorCorrecto && aciertos < 3) {
      aciertos++;
      ContadorAciertos.textContent = aciertos;
      if (aciertos === 3) {
        alert("🏆 🏆¡Enhorabuena, has ganado! 🏆 🏆");
        reiniciarJuego();
      }
    } else if (caja3.style.backgroundColor !== colorCorrecto && fallos < 3) {
      fallos++;
      ContadorFallos.textContent = fallos;
      if (fallos === 3) {
        alert("💩 💩 BUUUU mantaaa 💩 💩");
        reiniciarJuego();
      }
    }
  });
}

// Creamos una funcion para el reinicio y que quite los eventos que puede dar problemas
function reiniciarJuego() {
  //Dejamos contadores a 0
  aciertos = 0;
  fallos = 0;

  //Identificamos dónde hay que escribir un 0
  const ContadorAciertos = document.getElementById("contador-aciertos");
  const ContadorFallos = document.getElementById("contador-fallos");

  //Escribimos un 0 en los contadores
  ContadorAciertos.textContent = aciertos;
  ContadorFallos.textContent = fallos;

  // //Quitamos eventos
  caja1.removeEventListener("click", verificarRespuesta);
  caja2.removeEventListener("click", verificarRespuesta);
  caja3.removeEventListener("click", verificarRespuesta);

  //En vez de llamar a la funcion iniciar juego, recargamos la página que dá menos problemas
  location.reload();
}

// Iniciar el juego
actualizarJuego();
