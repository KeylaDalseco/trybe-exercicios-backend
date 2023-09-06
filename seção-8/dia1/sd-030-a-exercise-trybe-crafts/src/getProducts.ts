import { Product } from './types/Product';

// sem annotation, com o assertions as
function getProduct():Product {
  const product = {} as Product;
  product.barcode = '123c456b789a';
  return product;
}

console.log(getProduct());

// sem annotation, com o assertions as
function getProduct2():Product {
  const product: Product = {
    barcode: '123c456b789a',
    price: 5.5,
  };
  return product;
}

console.log(getProduct2()); 