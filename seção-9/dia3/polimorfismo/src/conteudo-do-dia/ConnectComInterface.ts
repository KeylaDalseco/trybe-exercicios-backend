interface Connectable {
  connect(): void;
  name: string;
}

class MongoDatabase1 implements Connectable {
  constructor(public name: string) {}
  connect() {
    console.log(`Fazendo conexão com banco de dados ${this.name}!`)
  }
}

class MySQLDatabase1 implements Connectable {
  constructor(public name: string) {}
  connect() {
    console.log(`Fazendo conexão com banco de dados ${this.name}!`)
  }
}

// const db1 = new Database(); // com o abstract -> aqui ele não permite criar instancia dela mesma
const db5 = new MongoDatabase1('mongo');
const db6 = new MySQLDatabase1('MySQL');

// exemplo de uso
const connectToDatabase1 = (db: Connectable) => {
  db.connect();
}

// connectToDatabase1(db1);
connectToDatabase1(db5);
connectToDatabase1(db6);
