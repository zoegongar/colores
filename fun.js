// window.addEventListener("load", cargarJuego);

// const cajas_colores = [
//   [
//     { rojo_1: "rgb(255, 0, 0)" }, // Roja
//     { rojo_2: "rgb(220, 0, 0)" }, // Roja con variación
//     { rojo_3: "rgb(255, 50, 50)" }, // Roja con variación
//   ],
//   [
//     { verde_1: "rgb(0, 128, 0)" }, // Verde
//     { verde_2: "rgb(0, 100, 0)" }, // Verde con variación
//     { verde_3: "rgb(50, 150, 50)" }, // Verde con variación
//   ],
//   [
//     { amarillo_1: "rgb(255, 255, 0)" }, // Amarilla
//     { amarillo_2: "rgb(220, 220, 0)" }, // Amarilla con variación
//     { amarillo_3: "rgb(255, 255, 50)" }, // Amarilla con variación
//   ],
//   [
//     { violeta_1: "rgb(128, 0, 128)" }, // Violeta
//     { violeta_2: "rgb(100, 0, 100)" }, // Violeta con variación
//     { violeta_3: "rgb(150, 50, 150)" }, // Violeta con variación
//   ],
//   [
//     { naranja_1: "rgb(255, 165, 0)" }, // Naranja
//     { naranja_2: "rgb(220, 145, 0)" }, // Naranja con variación
//     { naranja_3: "rgb(255, 185, 50)" }, // Naranja con variación
//   ],
// ];

// let codigoRGB;
// let aciertos = 0;
// let fallos = 0;

// function cargarJuego() {
//   generarCodigoRGB();
//   mostrarCajas();
// }

// function generarCodigoRGB() {
//   const indiceGrupo = Math.floor(Math.random() * cajas_colores.length);
//   const grupoColores = cajas_colores[indiceGrupo];
//   const indiceColor = Math.floor(Math.random() * grupoColores.length);
//   const color = Object.values(grupoColores[indiceColor])[0];
//   codigoRGB = color;
// }

// function mostrarCajas() {
//   const caja1 = document.getElementById("caja1");
//   const caja2 = document.getElementById("caja2");
//   const caja3 = document.getElementById("caja3");

//   const grupoColores = cajas_colores.find((grupo) =>
//     grupo.some((variacion) => Object.values(variacion)[0] === codigoRGB)
//   );

//   const colores = grupoColores.map((variacion) => Object.values(variacion)[0]);

//   caja1.style.backgroundColor = colores[0];
//   caja2.style.backgroundColor = colores[1];
//   caja3.style.backgroundColor = colores[2];

//   caja1.addEventListener("click", function () {
//     verificarRespuesta(caja1.style.backgroundColor);
//   });
//   caja2.addEventListener("click", function () {
//     verificarRespuesta(caja2.style.backgroundColor);
//   });
//   caja3.addEventListener("click", function () {
//     verificarRespuesta(caja3.style.backgroundColor);
//   });
// }

// function verificarRespuesta(colorSeleccionado) {
//   if (colorSeleccionado === codigoRGB) {
//     aciertos++;
//     document.getElementById("aciertos").textContent = aciertos;
//     alert("¡Correcto! Has acertado el color.");
//   } else {
//     fallos++;
//     document.getElementById("fallos").textContent = fallos;
//     alert("Incorrecto. Sigue intentándolo.");
//   }

//   generarCodigoRGB();
//   mostrarCajas();
// }
window.addEventListener("load", iniciarJuego);

const cajas_colores = [
  { rojo: "rgb(255, 0, 0)" },
  { verde: "rgb(0, 255, 0)" },
  { azul: "rgb(0, 0, 255)" },
];

let codigoCorrecto;
let aciertos = 0;
let fallos = 0;

function iniciarJuego() {
  generarCodigo();
  generarColores();
  asignarEventos();
}

function generarCodigo() {
  const codigoElemento = document.getElementById("codigo");
  const codigo = generarCodigoRGB();
  codigoElemento.textContent = codigo;
  codigoCorrecto = codigo;
}

function generarCodigoRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `(${r}, ${g}, ${b})`;
}

function generarColores() {
  const caja1 = document.getElementById("caja1");
  const caja2 = document.getElementById("caja2");
  const caja3 = document.getElementById("caja3");

  const colores = obtenerColoresAleatorios();
  caja1.style.backgroundColor = colores[0];
  caja2.style.backgroundColor = colores[1];
  caja3.style.backgroundColor = colores[2];
}

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

function verificarRespuesta(color) {
  if (color === codigoCorrecto) {
    aciertos++;
    document.getElementById("aciertos").textContent = aciertos;
    if (aciertos === 3) {
      alert("¡Has ganado!");
      reiniciarJuego();
    } else {
      generarCodigo();
      generarColores();
    }
  } else {
    fallos++;
    document.getElementById("fallos").textContent = fallos;
    if (fallos === 3) {
      alert("¡Has perdido!");
      reiniciarJuego();
    }
  }
}

function reiniciarJuego() {
  aciertos = 0;
  fallos = 0;
  document.getElementById("aciertos").textContent = aciertos;
  document.getElementById("fallos").textContent = fallos;
  generarCodigo();
  generarColores();
}
