import { Transaction } from 'src/types/Transaction';

const emptyNameTransaction: Transaction = {
  id: 1,
  name: '',
  price: 0,
  type: 'Saque',
  userId: 2
}

const validTransaction: Transaction = {
  id: 1,
  name: 'Boletos',
  price: 1,
  type: 'Saque',
  userId: 1
}

const validTransactionFromDB: Transaction = {
  id: 1,
  name: 'Boletos',
  price: 1,
  type: 'Saque',
  userId: 1
}
export default {
  validTransaction,
  emptyNameTransaction,
  validTransactionFromDB,
}
