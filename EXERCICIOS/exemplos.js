class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
      this.child = null;
    }
  }
  
  class FamilyLinkedList {
    constructor() {
      this.head = null;
    }
  
    append(person) {
      if (!this.head) {
        this.head = person;
        return;
      }
      let current = this.head;
      while (current.child) {
        current = current.child;
      }
      current.child = person;
    }
  
    print() {
      let current = this.head;
      while (current) {
        console.log(`Name: ${current.name}, Age: ${current.age}`);
        if (current.child) {
          console.log(`Child: ${current.child.name}`);
        }
        current = current.child;
      }
    }
  }
  
  const gilberto = new Person("Gilberto Gil", 79);
  const bia = new Person("Bia Gil", 50);
  gilberto.child = bia;
  
  const familyList = new FamilyLinkedList();
  familyList.append(gilberto);
  
  // Imprimindo as informações da lista
  familyList.print();