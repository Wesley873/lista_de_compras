export default class Produto {
  item;
  name;
  price;
  quantity;
  packaging;
  unitOfMeasurement;

  constructor(item, name, price, quantity, packaging, unitOfMeasurement) {
    this.item = item;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.packaging = packaging;
    this.unitOfMeasurement = unitOfMeasurement;
  }
}