// inicio de variable
let tarjetas_destapadas = 0;
let tarjeta_1 = null;
let tarjeta_2 = null;
let primer_resultado = null;
let segundo_resultado = null;
let movimientos = 0;
let aciertos = 0;
let temporizador = false;
let timer = 30;
let tiempo_regresivo = null;
let timer_inicial = timer;

let mostrar_movimientos = document.getElementById('movimientos');
let mostrar_aciertos = document.getElementById('aciertos');
let mostrar_tiempo = document.getElementById('tiempo'); 
// numeros aleatorios

let numeros = [0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11];
numeros = numeros.sort(() => {return Math.random() -0.5});
console.log(numeros);

// funcion dos

function contar_tiempo(){
    tiempo_regresivo = setInterval(()=>{
        timer--;
        mostrar_tiempo.innerHTML = `tiempo: ${timer} segundos`;
        if (timer == 0){
            clearInterval(tiempo_regresivo);
            bloquear_tarjetas();
        }
    },1000);
}

function bloquear_tarjetas(){
    for(let i = 0; i <= 15; i++){
        let tarjeta_bloqueada = document.getElementById(i);
        tarjeta_bloqueada.innerHTML = `<img src="./img_juegoo/${numeros[i]}.png" alt="img">`;
        tarjeta_bloqueada.disabled = true;
    } 
}

// funcion principal

function destapar(id){
    if(temporizador == false){
        contar_tiempo();
        temporizador = true;
    }
    tarjetas_destapadas++;
    console.log(tarjetas_destapadas);
    if (tarjetas_destapadas == 1){
        tarjeta_1 = document.getElementById(id);
        primer_resultado = numeros[id];
        tarjeta_1.innerHTML = `<img src="./img_juegoo/${primer_resultado}.png" alt="img">`;

        // deshabilitar
        tarjeta_1.disabled = true;
    }
    else if(tarjetas_destapadas == 2){
        tarjeta_2 = document.getElementById(id);
        segundo_resultado = numeros[id];
        tarjeta_2.innerHTML = `<img src="./img_juegoo/${segundo_resultado}.png" alt="img">`;

        // deshabilitar
        tarjeta_2.disabled = true;

        // incrementar movimientos
        movimientos++;
        mostrar_movimientos.innerHTML = `movimientos: ${movimientos}`;

        if(primer_resultado == segundo_resultado){
            tarjetas_destapadas = 0;

            // aumentar aciertos
            aciertos++;
            mostrar_aciertos.innerHTML = `aciertos: ${aciertos}`;
        
        if(aciertos == 18){
            clearInterval(tiempo_regresivo);
            mostrar_aciertos.innerHTML = `aciertos: ${aciertos} 😱`;
            mostrar_tiempo.innerHTML = `tiempo: ${timer_inicial - timer} segundos 🎉`;
            mostrar_movimientos.innerHTML = `movimientos: ${movimientos} 😱`;
        }
    } else {
            setTimeout(()=>{
                tarjeta_1.innerHTML = ' ';
                tarjeta_2.innerHTML = ' ';
                tarjeta_1.disabled = false;
                tarjeta_2.disabled = false;
                tarjetas_destapadas = 0;
            },800);
        }
    }
}
