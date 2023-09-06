export type Product = {
  id: number,
  name: string,
  price: number,
  quantity: number,
  brands: string[],
};

export default function insertProducts(marcas: string[], product:Product): string {
  if (product.brands.every((brand) => marcas.includes(brand))) {
    return `${product.name} adicionado(a) com o preço de R$ ${product.price}`;
  }

  return 'Seu produto contém marcas indisponíveis.';
}
