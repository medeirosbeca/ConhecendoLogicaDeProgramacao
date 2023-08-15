try {
    const divisor = 0;
    const resultado = 10 / divisor;
    console.log("O resultado é:", resultado);
  } catch (error) {
    
  }
  console.error("Erro:", error.message);
  
  /* 1. Crie um programa que recebe do teclado um número e tenta dividir por zero dentro de um bloco
  try...catch. Capture o erro e o exiba "Erro: Divisão por zero" no console.
2. Crie um programa que recebe do teclado uma string não numérica em um número utilizando parseInt
dentro de um bloco try...catch. Capture o erro e o exiba "Erro: Conversão inválida" no console.
3. Crie um programa que recebe do teclado um objeto e tente acessar uma propriedade inexistente
desse objeto dentro de um bloco try...catch. Capture o erro e o exiba "Erro: Propriedade não
encontrada" no console.*/