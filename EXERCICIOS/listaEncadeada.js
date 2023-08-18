/* Crie uma lista encadeada em que cada elemento representa uma pessoa. Ela precisa conter informações 
como nome, idade e referência ao filho dela.*/

//Elemento de cada pessoa:
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.filho = null;
    }
}

//Criando a lista:
class ListaPessoa {
    constructor (){
        this.cabeca = null; //Começa a cabeça(topo da lista) recebendo vazio.
    }
    
//Adicionar informações das pessoas: 
adicionar(pessoa) {
  if (!this.cabeca) {
    this.cabeca = pessoa;
    return;
  }
  let posicaoAtual = this.cabeca;
  while (posicaoAtual.filho) {
    posicaoAtual = posicaoAtual.filho;
  }
    posicaoAtual.filho = pessoa;
  }

// Para imprimir a lista:
  imprimir() {
    let posicaoAtual = this.cabeca;
    while (posicaoAtual) {
      console.log(`Nome: ${posicaoAtual.nome}, Idade: ${posicaoAtual.idade}`);
      if (posicaoAtual.filho) {
        console.log(`Filho: ${posicaoAtual.filho.nome}`);
      }
      posicaoAtual = posicaoAtual.filho;
    }
  }
}

//Exemplo de retornar todos os valores da lista: 
const gilberto = new Pessoa('Gilberto', 79);
const preta = new Pessoa('Preta', 49);
gilberto.filho = preta;

const familiaLista = new ListaPessoa();
  familiaLista.adicionar(gilberto);
  
// Imprimindo as informações da lista
familiaLista.imprimir();