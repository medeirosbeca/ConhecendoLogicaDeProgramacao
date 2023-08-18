/* Temos o array [15, 8, 10, 25, 12, 30, 5, 20, 18, 7] e precisamos criar um código em JS para encontrar o
valor 20. Para isso, temos que escolher entre realizar uma busca linear ou binária de acordo com a que for
mais adequada para essa situação. Codifique a solução mais eficiente para buscar o número 20 no array.*/

// 1. Busca Linear:
function buscaLinear (array, verificarNumero){
     for (let indice = 0; indice < array.length; indice++){
         if (array[indice] === verificarNumero){
             return indice;
         }
     } 
     return -1;   
 }
const arrayLinear = [15,8,10,25,12,30,5,20,18,7];
let verificarValor = 20;

const indiceEsperado = buscaLinear (arrayLinear, verificarValor);
if (indiceEsperado !== -1){
    console.log(`O elemento ${verificarValor} foi encontrado no indice ${indiceEsperado}`);
} else {
    console.log(`O elemento ${verificarValor} não está na lista.`);
}
//RESPOSTA: Na busca linear, percorre todo o array até chegar na posição 8.


//2. Buscar Binaria:

function buscaBinaria (array, verificarNumero){
    let inicio = 0;
    let fim = array.length -1;
    while (inicio <= fim){
        const meio = Math.floor ((inicio+fim)/2)
    
    if (array[meio] === verificarNumero){
        return meio;
     }
    if (array[meio] > verificarNumero){
        return fim = meio-1;
    } else{
        inicio = meio+1;
    }
    }
    return -1;
}

const arrayBinario = [15,8,10,25,12,30,5,20,18,7]; 
const verificarElemento = 20;
const indiceEncontrado = buscaBinaria (arrayBinario, verificarElemento);
if (indiceEncontrado !== -1){
    console.log(`O elemento ${verificarElemento} foi encontrado no indice ${indiceEncontrado}`);
} else {
    console.log(`O elemento ${verificarElemento} não está na lista.`);
}
/*RESPOSTA: Na busca binária, organiza o array em ordem crescente e divide ao meio fazendo em 2 passos
até encontrar na posição 8. Esse processo é o mais eficiente.*/