"use strict";
const cajas_colores = [
  [
    { rojo_1: "rgb(255, 0, 0)" },
    { rojo_2: "rgb(220, 0, 0)" },
    { rojo_3: "rgb(255, 50, 50)" },
  ],
  [
    { verde_1: "rgb(0, 128, 0)" },
    { verde_2: "rgb(0, 100, 0)" },
    { verde_3: "rgb(50, 150, 50)" },
  ],
  [
    { amarillo_1: "rgb(255, 255, 0)" },
    { amarillo_2: "rgb(220, 220, 0)" },
    { amarillo_3: "rgb(255, 255, 50)" },
  ],
  [
    { violeta_1: "rgb(128, 0, 128)" },
    { violeta_2: "rgb(100, 0, 100)" },
    { violeta_3: "rgb(150, 50, 150)" },
  ],
  [
    { naranja_1: "rgb(255, 165, 0)" },
    { naranja_2: "rgb(220, 145, 0)" },
    { naranja_3: "rgb(255, 185, 50)" },
  ],
];

const codigoRGB = document.getElementById("codigo");
const caja1 = document.getElementById("caja1");
const caja2 = document.getElementById("caja2");
const caja3 = document.getElementById("caja3");
const contadorAciertos = document.getElementById("contador-aciertos");
const contadorFallos = document.getElementById("contador-fallos");

let aciertos = 0;
let fallos = 0;

// Función para generar un número aleatorio entre 0 y el número máximo dado
function generarNumeroAleatorio(max) {
  return Math.floor(Math.random() * max);
}

// Función para actualizar el código RGB y las cajas de colores
function actualizarJuego() {
  // Generar un número aleatorio para seleccionar un color del array
  const indiceColor = generarNumeroAleatorio(cajas_colores.length);
  const colorSeleccionado = cajas_colores[indiceColor];

  // Generar un número aleatorio para seleccionar la caja correcta
  const indiceCajaCorrecta = generarNumeroAleatorio(colorSeleccionado.length);
  const cajaCorrecta = colorSeleccionado[indiceCajaCorrecta];

  // Actualizar el código RGB en el párrafo
  codigoRGB.textContent = Object.values(cajaCorrecta)[0];

  // Asignar los colores a las cajas
  caja1.style.backgroundColor = Object.values(colorSeleccionado[0])[0];
  caja2.style.backgroundColor = Object.values(colorSeleccionado[1])[0];
  caja3.style.backgroundColor = Object.values(colorSeleccionado[2])[0];

  // Agregar el evento de click a las cajas
  caja1.addEventListener("click", function () {
    verificarRespuesta(caja1, cajaCorrecta);
  });
  caja2.addEventListener("click", function () {
    verificarRespuesta(caja2, cajaCorrecta);
  });
  caja3.addEventListener("click", function () {
    verificarRespuesta(caja3, cajaCorrecta);
  });
}

// Función para verificar si la caja seleccionada es la correcta
function verificarRespuesta(cajaSeleccionada, cajaCorrecta) {
  if (
    cajaSeleccionada.style.backgroundColor === Object.values(cajaCorrecta)[0]
  ) {
    aciertos++;
    contadorAciertos.textContent = aciertos;
    if (aciertos === 3) {
      reiniciarJuego();
    } else {
      actualizarJuego();
    }
  } else {
    fallos++;
    contadorFallos.textContent = fallos;
    if (fallos === 3) {
      reiniciarJuego();
    }
  }
}

// Función para reiniciar el juego
function reiniciarJuego() {
  aciertos = 0;
  fallos = 0;
  contadorAciertos.textContent = aciertos;
  contadorFallos.textContent = fallos;
  caja1.removeEventListener("click", verificarRespuesta);
  caja2.removeEventListener("click", verificarRespuesta);
  caja3.removeEventListener("click", verificarRespuesta);
  actualizarJuego();
}

// Iniciar el juego
actualizarJuego();
