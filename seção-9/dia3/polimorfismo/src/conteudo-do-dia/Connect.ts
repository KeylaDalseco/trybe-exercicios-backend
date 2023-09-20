abstract class Database {
  // AQUI O CONNECT FAZ UMA CONECÇÃO COM O BANCO DE DADOS POR EXEMPLO
  abstract connect(): void;
  protected _name: string;

  constructor(name:string = 'Database') {
    this._name = name;
  }

  public get name() {
    return this._name;
  }
}

class MongoDatabase extends Database {
  connect() {
    console.log(`Fazendo conexão com banco de dados ${this._name}!`)
  }
}

class MySQLDatabase extends Database {
  connect() {
    console.log(`Fazendo conexão com banco de dados ${this._name}!`)
  }
}

// const db1 = new Database(); // com o abstract -> aqui ele não permite criar instancia dela mesma
const db2 = new MongoDatabase('mongo');
const db3 = new MySQLDatabase('MySQL');

// exemplo de uso
const connectToDatabase = (db: Database) => {
  db.connect();
}

// connectToDatabase(db1);
connectToDatabase(db2);
connectToDatabase(db3);
