const glitches = document.querySelectorAll(".glitch");

function activarGlitch(){

    glitches.forEach(elemento => {

        if(Math.random() < 0.5){

            elemento.classList.add("active");

            setTimeout(() => {
                elemento.classList.remove("active");
            }, 1800);

        }

    });

}

setInterval(activarGlitch, 2000);
