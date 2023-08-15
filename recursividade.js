/* 1. Crie uma função recursiva chamada somaRecursiva que receba um número inteiro
positivo n como argumento e calcule a soma de todos os números inteiros de 1 até n.*/

function somaRecursiva(n){
  if (n === 1){
      return 1;
  } return n + somaRecursiva (n-1);
} 
console.log(somaRecursiva (10));

/* 2. Escreva uma função chamada fibonacci que receba um número n como parâmetro e
retorne o n-ésimo termo da sequência de Fibonacci. Lembre-se de implementar essa função
de forma recursiva.*/

/* FIBONACCI
Primeiro termo= 0
Segundo termo = 1
Terceiro termo = 0+1 = 1
Quarto termo 1+1 = 2
Quinto termo = 1+2 = 3
Sexto termo = 2+3=5
Setimo termo = 3+5= 8
Oitavo termo = 5+8= 13...
*/
function fibonacci (n){
 if (n <= 2) {
 return n-1;
 } else{
     return n = fibonacci(n-1) + fibonacci(n-2);
 }
}
console.log(fibonacci(8));