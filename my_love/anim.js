// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "te amo y más", time: 0.14 },
  { text: "de lo que puedes imaginar,", time: 0.16 },
  { text: "te amo además", time: 0.20 },
  { text: "como nunca nadie,", time: 0.23 },
  { text: "jamas lo hara", time: 0.25 },
  { text: "en esta canción,", time: 0.28 },
  { text: "va mi corazón", time: 0.30 },
  { text: "amor mas que amor,", time: 0.35 },
  { text: "es el nuestro", time: 0.36 },
  { text: "y te lo vengo a dar...", time: 0.37 },
  { text: "te miro, y mas", time: 0.42 },
  { text: "y mas, y mas", time: 0.45 },
  { text: "te quiero mirar", time: 0.48 },
  { text: "te amo y sabras", time: 0.49 },
  { text: "puro sentimiento", time: 0.53 },
  { text: "y no hay nada mas", time: 0.55 },
  { text: "mi sueño es llegar,", time: 0.57 },
  { text: "A tu alma tocar...", time: 1.00 },
  { text: "amor mas que amor", time: 1.03 },
  { text: "es el nuestro y te", time: 1.05 },
  { text: "lo vengo a dar", time: 1.06 },
  { text: "ruego a Dios", time: 1.11 },
  { text: "Where I'm now? I don't know why", time: 169 },
  { text: "Nice butterflies in my hands", time: 176 },
  { text: "Too much light for twilight", time: 183 },
  { text: "In the mood for the flowers", time: 188 },
  { text: "Love.", time: 140 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);
