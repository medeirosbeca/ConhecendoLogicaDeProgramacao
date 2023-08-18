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