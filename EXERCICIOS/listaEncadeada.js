/* Crie uma lista encadeada em que cada elemento representa uma pessoa. Ela precisa conter informações
como nome, idade e referência ao filho dela.*/


//Estrutura do Nó:
class ConstruindoNo {
    constructor() {
      this.value = null;
      this.next = null;
    }
    getValue() {
      return this.value;
    }
    setValue(value) {
      this.value = value;
    }
    getNext() {
      return this.next;
    }
    setNext(next) {
      this.next = next;
    }
  }

//Estrutura da Lista:
class ListaEncadeada {
    constructor() {
        this.head = null;
    }
    add(value) {
        let node = new Node();
        node.setValue(value);
        node.setNext(this.head);
        this.head = node;
    }
    toString() {
        let sb = new StringBuffer();
        sb.append("[");
        let ponteiro = this.head;
        while (ponteiro !== null) {
            sb.append(ponteiro.getValue() + " ");
            ponteiro = ponteiro.getNext();
        }
        sb.append("]");
        return sb.toString();
    }
}