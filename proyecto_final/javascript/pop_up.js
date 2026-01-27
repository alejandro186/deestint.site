const pop_up = document.getElementById('pop_up');
const contenido = document.getElementById('my_body');
const cerrar = document.querySelectorAll('.cerrar');
const botones = document.querySelectorAll('.information_product');
const overlay_4 = document.querySelector('.overlay_4');

botones.forEach(boton => {
  boton.addEventListener("click", function(){
    const nombre = this.dataset.nombre;
    const descripcion_1 = this.dataset.descripcion1;
    const descripcion_2 = this.dataset.descripcion2;
    const precio = this.dataset.precio;
    const imagen = this.dataset.imagen;
    const marca = this.dataset.marca;
    const bakcground_color = getComputedStyle(document.documentElement).getPropertyValue('--color-secundario').trim();  
    contenido.innerHTML = `
      <div class="encabezado"> 
        <h2 class="m_titulo"> ${nombre} </h2>
        <span class="m_marca"> ${marca} </span>
        <img src="${imagen}" alt="imagen_producto" class="m_imagen"></img>
        <div class="m_descripcion">
          <p> ${descripcion_1} </p>
          <p> ${descripcion_2} </p>
        </div>
        <section class="especificaciones_importantes">
          <button class="more_information" onclick="">
            <i class="fa-solid fa-headset"></i>
          </button>
          <h3 class="m_precio"> ${precio} </h3>
          <button class="boton_compra" onclick=""> 
            <i class="fa-solid fa-cart-plus"></i>
          </button>
        </section>
      `
    pop_up.classList.add("visible");
    overlay_4.style.background = bakcground_color;
  });
});

cerrar.forEach(span => {
  span.addEventListener("click", () => {
    pop_up.classList.remove("visible");
  });
});
window.addEventListener("click", (event) => {
  if (event.target == window) 
    pop_up.classList.remove("visible");
});
