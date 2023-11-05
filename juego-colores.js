window.addEventListener("load", iniciarJuego);

const cajas_colores = [
  { rojo_1: "rgb(255, 0, 0)" },
  { rojo_2: "rgb(220, 0, 0)" },
  { rojo_3: "rgb(255, 50, 50)" },

  { verde_1: "rgb(0, 128, 0)" },
  { verde_2: "rgb(0, 100, 0)" },
  { verde_3: "rgb(50, 150, 50)" },

  { amarillo_1: "rgb(255, 255, 0)" },
  { amarillo_2: "rgb(220, 220, 0)" },
  { amarillo_3: "rgb(255, 255, 50)" },

  { violeta_1: "rgb(128, 0, 128)" },
  { violeta_2: "rgb(100, 0, 100)" },
  { violeta_3: "rgb(150, 50, 150)" },

  { naranja_1: "rgb(255, 165, 0)" },
  { naranja_2: "rgb(220, 145, 0)" },
  { naranja_3: "rgb(255, 185, 50)" },
];
let codigoCorrecto;
let aciertos = 0;
let fallos = 0;
//
// generamos una funcion que llama a las 3 principales
//
function iniciarJuego() {
  generarCodigo();
  generarColores();
  asignarEventos();
}
//
// creamos la funcion de generar codigo   asociandola al id del html "codigo"
//
function generarCodigo() {
  const codigoElemento = document.getElementById("codigo");
  const codigo = generarCodigoRGB();
  codigoElemento.textContent = codigo;
  codigoCorrecto = codigo;
}
//
// generamos el codigo rgb
//
function generarCodigoRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
//
// funcion que genera los colores y los guarda en las cajas

function generarColores() {
  const caja1 = document.getElementById("caja1");
  const caja2 = document.getElementById("caja2");
  const caja3 = document.getElementById("caja3");

  const colores = obtenerColoresAleatorios();
  caja1.style.backgroundColor = colores[0];
  caja2.style.backgroundColor = colores[1];
  caja3.style.backgroundColor = colores[2];
}
//
// creamos la funcion para obtener los colores aleatoriamente utilizando un bucle ,indice * la cantidad de colores disponibles
//
function obtenerColoresAleatorios() {
  const coloresAleatorios = [];
  const coloresDisponibles = [...cajas_colores];
  const indiceCorrecto = Math.floor(Math.random() * 3);
  coloresAleatorios[indiceCorrecto] = codigoCorrecto;

  for (let i = 0; i < 3; i++) {
    if (i !== indiceCorrecto) {
      const indice = Math.floor(Math.random() * coloresDisponibles.length);
      coloresAleatorios[i] = Object.values(coloresDisponibles[indice])[0];
      coloresDisponibles.splice(indice, 1);
    }
  }

  return coloresAleatorios;
}
//
// creamos otra funcion para asignar los eventos cada vez que se haga click y se verifique si es correcto o no
//

function asignarEventos() {
  const caja1 = document.getElementById("caja1");
  const caja2 = document.getElementById("caja2");
  const caja3 = document.getElementById("caja3");

  caja1.addEventListener("click", function () {
    verificarRespuesta(caja1.style.backgroundColor);
  });

  caja2.addEventListener("click", function () {
    verificarRespuesta(caja2.style.backgroundColor);
  });

  caja3.addEventListener("click", function () {
    verificarRespuesta(caja3.style.backgroundColor);
  });
}
//
// creamos la funcion de verificacion en cada evento y asignamos condicional ,luego con el else volvemos a llamar a que nos genere codigo y colores diferentes
//
function verificarRespuesta(color) {
  if (color === codigoCorrecto) {
    aciertos++;
    document.getElementById("aciertos").textContent = aciertos;
    if (aciertos === 3) {
      alert("🏆 🏆¡Enhorabuena, has ganado! 🏆 🏆");
      reiniciarJuego();
    } else {
      generarCodigo();
      generarColores();
    }
  } else {
    fallos++;
    document.getElementById("fallos").textContent = fallos;
    if (fallos === 3) {
      alert("💩 💩 BUUUU mantaaa 💩 💩");
      reiniciarJuego();
    }
  }
}
//
// funcion que reinica el juego con los valores a 0 y volvemos a llamar a que genere codigo y colores nuevos
//

function reiniciarJuego() {
  aciertos = 0;
  fallos = 0;
  document.getElementById("aciertos").textContent = aciertos;
  document.getElementById("fallos").textContent = fallos;
  generarCodigo();
  generarColores();
}
