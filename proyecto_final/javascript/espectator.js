const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate'); // añade la clase animate
            observer.unobserve(entry.target); // deja de observar después de animar
        }
    });
}, {
    threshold: 0.1 
});

// Observar todos los elementos con estas clases
document.querySelectorAll('.productos_R, .titulos, .especificaciones a, .especificaciones i, .boton_productos, .comenzar').forEach(el => {
    observer.observe(el);
});
