const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const caracteres =
    "アァカサタナハマヤャラワ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const letras = caracteres.split("");

const fontSize = 16;
const gotas = [];

function ajustarCanvas(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const columnas = Math.floor(canvas.width / fontSize);
    gotas.length = columnas;

    for(let i = 0; i < columnas; i++){
        if(gotas[i] === undefined){
            gotas[i] = 1;
        }
    }
}

ajustarCanvas();

function dibujar(){

    ctx.fillStyle = "rgba(3, 3, 3, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#002fff2d";
    ctx.font = fontSize + "px monospace";
    for(let i = 0; i < gotas.length; i++){
        const texto =
            letras[Math.floor(Math.random() * letras.length)];
        ctx.fillText(
            texto,
            i * fontSize,
            gotas[i] * fontSize
        );
        if(
            gotas[i] * fontSize > canvas.height &&
            Math.random() > 0.975
        ){
            gotas[i] = 0;
        }
        gotas[i]++;
    }
}
setInterval(dibujar, 53);

window.addEventListener("resize", () => {
    ajustarCanvas();
});
