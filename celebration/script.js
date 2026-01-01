const messages = [
    "Espero que disfrutes este nuevo año, con todo rl cariño y amor que mereces",
    "No cuentes los días, haz que los días cuenten. Se que todo lo bueno te espera!",
    "La magia del amor, es la magia que espero que abunde en todo lo que hagas.",
    "Se que este año te espera grandes propósitos y grandes cambios!",
    "espero que este 2026 sean 365 oportunidades para ser feliz y brillar."
];

let currentIndex = 0;
const carousel = document.getElementById('carousel');

// Generar mensajes
messages.forEach((msg, index) => {
    const div = document.createElement('div');
    div.classList.add('carousel-item');
    if (index === 0) div.classList.add('active');
    div.innerHTML = `<p>"${msg}"</p>`;
    carousel.appendChild(div);
});

const items = document.querySelectorAll('.carousel-item');

function showMessage(index) {
    items.forEach(item => item.classList.remove('active'));
    items[index].classList.add('active');
}

document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % items.length;
    showMessage(currentIndex);
});

document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    showMessage(currentIndex);
});

// Cambio automático cada 5 segundos
setInterval(() => {
    currentIndex = (currentIndex + 1) % items.length;
    showMessage(currentIndex);
}, 100000);
