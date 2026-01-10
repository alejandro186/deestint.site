const words = [
    "L'oréal",
    "Schwarzkopf",
    "Moroccanoil",
    "Alfaparf",
    "Alter-Ego",
    "Milk Shake",
    "Tec Italy",
    "Wella",
    "Lizze",
    "Turbox",
    "Wypall"
];

const typedEl = document.getElementById('typed');
const typing_speed = 80;
const erasing_speed = 50;
const delay_between_words = 2500;

let word_index = 0;
let char_index = 0;
let is_deleting = false;

function typeLoop() {
  const current = words[word_index];
  if (!is_deleting) {
    // escribir
    typedEl.textContent = current.slice(0, ++char_index);
    if (char_index === current.length) {
      is_deleting = true;
      setTimeout(typeLoop, delay_between_words);
      return;
    }
    setTimeout(typeLoop, typing_speed);
  } else {
    // borrar
    typedEl.textContent = current.slice(0, --char_index);
    if (char_index === 0) {
      is_deleting = false;
      word_index = (word_index + 1) % words.length;
      setTimeout(typeLoop, typing_speed);
      return;
    }
    setTimeout(typeLoop, erasing_speed);
  }
}

// Inicia cuando DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  if (words.length) setTimeout(typeLoop, 500);
});
