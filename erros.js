// try {
//     const divisor = 0;
//     const resultado = 10 / divisor;
//     console.log("O resultado é:", resultado);
//   } catch (error) {
    
//   }
//   console.error("Erro:", error.message);
  
// try {
//   console.log("Iniciando calculadora...");
//   let input = 0;
//   if (input === 0) {
//     throw "Valor negado";
//   }
//   let result = 5 / input;
// } catch (erro) {
//   console.log("[Erro:] Divisão por zero não permitida");
// } finally {
//   console.log("Finalizando calculador...\n");
// }




/* 1. Crie um programa que recebe do teclado um número e tenta dividir por zero dentro de um bloco
  try...catch. Capture o erro e o exiba "Erro: Divisão por zero" no console.*/

// var readlineSync = require('readline-sync');

// try {
//   let numero = readlineSync.question("Digite um numero:");
//   let divisor = 0;
//   let resultado = numero / divisor;
//   if (divisor === 0) {
//     throw "Valor negado";
    
//   } console.log("O resultado é:", resultado);
// } catch (error) {
//    console.log("Erro: Divisão por zero.");
//   }


/* 2. Crie um programa que recebe do teclado uma string não numérica em um número utilizando parseInt
dentro de um bloco try...catch. Capture o erro e o exiba "Erro: Conversão inválida" no console.*/

var readlineSync = require('readline-sync');
try {
   let texto;
   const numero = parseInt(readlineSync.question("Digite seu nome:"));
   
   throw 'Operação Inválida';
   
 } catch (e) {
     console.log('"Erro": Conversão inválida');
 }
   

/* 3. Crie um programa que recebe do teclado um objeto e tente acessar uma propriedade inexistente
desse objeto dentro de um bloco try...catch. Capture o erro e o exiba "Erro: Propriedade não
encontrada" no console.*/

try {
  const esportes = {
    futebol: "santa cruz",
    volei: "minas clube",
  };
  console.log(atividade.times);
} catch (error) {
  console.log("Erro: Propriedade não encontrada.");
  console.log(error.message); 
}


