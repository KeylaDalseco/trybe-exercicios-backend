"use strict";
exports.__esModule = true;
// sem annotation, com o assertions as
function getProduct() {
    var product = {};
    product.barcode = '123c456b789a';
    return product;
}
console.log(getProduct());
// sem annotation, com o assertions as
function getProduct2() {
    var product = {
        barcode: '123c456b789a',
        price: 5.5
    };
    return product;
}
console.log(getProduct2());
