class Item {
  // Constructor
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }

  // Getters
  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  getPrice() {
    return this.price;
  }

  // Setters
  setId(id) {
    this.id = id;
  }

  setName(name) {
    this.name = name;
  }

  setPrice(price) {
    this.price = price;
  }

  // Convert object to JSON string
  toString() {
    return JSON.stringify({
      id: this.id,
      name: this.name,
      price: this.price,
    });
  }

  // Used automatically by JSON.stringify()
  toJSON() {
    return {
      id: this.id,
      name: this.name,
      price: this.price,
    };
  }
}

module.exports = Item;