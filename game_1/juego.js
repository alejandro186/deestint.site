// inicio de variable
let tarjetas_destapadas = 0;


let numeros = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16,17,17,18,18];
numeros = numeros.sort(() => {return Math.random() -0.5});
console.log(numeros);

// funcion principal

function destapar(id){
    tarjetas_destapadas++;
    console.log(tarjetas_destapadas);

}
