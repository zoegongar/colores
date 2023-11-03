// "use strict"
// <!DOCTYPE html>
// <html>
// <head>
//   <title>Juego de Adivinar el Color</title>
//   <style>
//     .color-box {
//       width: 100px;
//       height: 100px;
//       display: inline-block;
//       margin: 10px;
//       cursor: pointer;
//     }
//   </style>
// </head>
// <body>
//   <h1>Juego de Adivinar el Color</h1>
//   <div id="color-code"></div>
//   <div id="color-boxes"></div>
//   <div>
//     <p>Aciertos: <span id="score-correct">0</span></p>
//     <p>Fallos: <span id="score-wrong">0</span></p>
//   </div>

//   <script>
//     var correctColor;
//     var scoreCorrect = 0;
//     var scoreWrong = 0;

//     function generateColor() {
//       var r = Math.floor(Math.random() * 256);
//       var g = Math.floor(Math.random() * 256);
//       var b = Math.floor(Math.random() * 256);
//       return "rgb(" + r + ", " + g + ", " + b + ")";
//     }

//     function generateVariations(correctColor) {
//       var variations = [];
//       for (var i = 0; i < 3; i++) {
//         var r = Math.floor(Math.random() * 51) - 25;
//         var g = Math.floor(Math.random() * 51) - 25;
//         var b = Math.floor(Math.random() * 51) - 25;
//         var variation = "rgb(" + (correctColor.r + r) + ", " + (correctColor.g + g) + ", " + (correctColor.b + b) + ")";
//         variations.push(variation);
//       }
//       return variations;
//     }

//     function createColorBoxes() {
//       var colorBoxes = document.getElementById("color-boxes");
//       colorBoxes.innerHTML = "";

//       var variations = generateVariations(correctColor);

//       for (var i = 0; i < variations.length; i++) {
//         var colorBox = document.createElement("div");
//         colorBox.className = "color-box";
//         colorBox.style.backgroundColor = variations[i];
//         colorBox.addEventListener("click", checkAnswer);
//         colorBoxes.appendChild(colorBox);
//       }

//       var correctColorBox = document.createElement("div");
//       correctColorBox.className = "color-box";
//       correctColorBox.style.backgroundColor = correctColor.color;
//       correctColorBox.addEventListener("click", increaseScore);
//       colorBoxes.appendChild(correctColorBox);
//     }

//     function checkAnswer(event) {
//       scoreWrong++;
//       document.getElementById("score-wrong").textContent = scoreWrong;
//     }

//     function increaseScore(event) {
//       scoreCorrect++;
//       document.getElementById("score-correct").textContent = scoreCorrect;
//       generateNewColor();
//     }

//     function generateNewColor() {
//       correctColor = generateColor();
//       document.getElementById("color-code").textContent = correctColor;
//       createColorBoxes();
//     }

//     generateNewColor();
//   </script>
// </body>
// Variables para el contador de fallos y aciertos
// let fallos = 0;
// let aciertos = 0;

// // Función para verificar si el color seleccionado es correcto
// function verificarColorSeleccionado(colorSeleccionado) {
//   // Obtenemos el color de la caja correcta
//   const cajaCorrecta = document.getElementById("caja1");
//   const colorCorrecto = cajaCorrecta.style.backgroundColor;

//   // Comparamos el color seleccionado con el color correcto
//   if (colorSeleccionado === colorCorrecto) {
//     // Incrementamos el contador de aciertos
//     aciertos++;
//   } else {
//     // Incrementamos el contador de fallos
//     fallos++;
//   }

//   // Actualizamos los contadores en el HTML
//   document.getElementById("emoticonGanar").textContent = `: ${fallos}`;
//   document.getElementById("emoticonFallar").textContent = `: ${aciertos}`;
// }

// // Event listener para las cajas de colores
// document.getElementById("caja1").addEventListener("click", function () {
//   verificarColorSeleccionado(this.style.backgroundColor);
// });

// document.getElementById("caja2").addEventListener("click", function () {
//   verificarColorSeleccionado(this.style.backgroundColor);
// });

// document.getElementById("caja3").addEventListener("click", function () {
//   verificarColorSeleccionado(this.style.backgroundColor);
// });
