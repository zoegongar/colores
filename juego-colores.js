window.addEventListener("load", iniciarJuego);


let codigoCorrecto;
let colorCorrecto;
let todosColores;
let aciertos = 0;
let fallos = 0;


/* 
  función que inicia el juego llamando a la función mostrar partida y asignar eventos.
 */
function iniciarJuego() {
  mostrarPartida();
  asignarEventos();
}

/* 
  función que muestra los colores, entre los que se encuentra el color que tenemos que adivinar.
 */
function mostrarPartida() {
  colorCorrecto = generarCodigoRGB();
  todosColores = generarColoresIncorrectos(colorCorrecto);

  mostrarColorCorrecto(colorCorrecto);
  mostrarTodosColores(todosColores);
}

/* 
  función que muestra el valor del código que tenemos que adivinar.
*/
function mostrarColorCorrecto(colorCorrecto) {
  const codigoElemento = document.getElementById("codigo");
  codigoElemento.textContent = `rgb(${colorCorrecto[0]}, ${colorCorrecto[1]}, ${colorCorrecto[2]})`;
}

/* 
  función que genera el código rgb.
 */
function generarCodigoRGB() {
  const r = Math.floor((Math.random() * 256));
  const g = Math.floor((Math.random() * 256));
  const b = Math.floor((Math.random() * 256));

  return [r, g, b];
}

function getCssForBackground(color) {
  return `rgb(${color[0]}, ${color[1]}, ${color[2]})`
}

/* 
  función que muestra los tres colores.
 */
function mostrarTodosColores(todosColores) {
  const caja1 = document.getElementById("caja1");
  const caja2 = document.getElementById("caja2");
  const caja3 = document.getElementById("caja3");

  caja1.style.backgroundColor = getCssForBackground(todosColores[0]);
  caja2.style.backgroundColor = getCssForBackground(todosColores[1]);
  caja3.style.backgroundColor = getCssForBackground(todosColores[2]);
}

/*
  función que genera tres colores aleatorios. Asigna uno de ellos a la variable codigoCorrecto.
 */
function generarColoresIncorrectos(colorCorrecto) {
  const coloresAleatorios = [];
  codigoCorrecto = Math.floor(Math.random() * 3);
  coloresAleatorios[codigoCorrecto] = codigoCorrecto;

  for (let i = 0; i < 3; i++) {
    if (i !== codigoCorrecto) {
      let nuevoColorAleatorio = [0, 0, 0];

      for (let j = 0; j < 3; j++) {
        var errorAmount = Math.floor((Math.random() * 10) + 10);
        nuevoColorAleatorio[j] = colorCorrecto[j] + errorAmount;
      }

      coloresAleatorios[i] = nuevoColorAleatorio;
    } else {
      coloresAleatorios[i] = colorCorrecto;
    }
  }

  return coloresAleatorios;
}

/* 
  función que vincula los valores de los colores con los valores del html y llama a la función que comprueba si
  es el color correcto o no.
 */
function asignarEventos() {
  const caja1 = document.getElementById("caja1");
  const caja2 = document.getElementById("caja2");
  const caja3 = document.getElementById("caja3");

  caja1.addEventListener("click", function () {
    verificarRespuesta(0);
  });

  caja2.addEventListener("click", function () {
    verificarRespuesta(1);
  });

  caja3.addEventListener("click", function () {
    verificarRespuesta(2);
  });
}
//
// 
//
/* 
  función que verifica si cada click es correcto o no y añade un acierto o fallo, según sea el caso.
 */
function verificarRespuesta(color) {
  if (color === codigoCorrecto) {
    aciertos++;
    document.getElementById("aciertos").textContent = aciertos;
    if (aciertos === 3) {
      alert("🏆 🏆¡Enhorabuena, has ganado! 🏆 🏆");
      reiniciarJuego();
    } 
  } else {
    fallos++;
    document.getElementById("fallos").textContent = fallos;
    if (fallos === 3) {
      alert("💩 💩 BUUUU mantaaa 💩 💩");
      reiniciarJuego();
    }
  }

  mostrarPartida();
}

/* 
  función que reinicia el juego y pone a cero los contadores.
*/
function reiniciarJuego() {
  aciertos = 0;
  fallos = 0;
  document.getElementById("aciertos").textContent = aciertos;
  document.getElementById("fallos").textContent = fallos;
  mostrarColorCorrecto(colorCorrecto);
  mostrarTodosColores(todosColores);
}
