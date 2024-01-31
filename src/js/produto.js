export default class Produto {
  #name;
  #price;
  #unitOfMeasurement;
  #quantity;
  constructor(name, price, unitOfMeasurement, quantity) {
    this.#name = name;
    this.#price = price;
    this.#unitOfMeasurement = unitOfMeasurement;
    this.#quantity = quantity;
  }

  
}