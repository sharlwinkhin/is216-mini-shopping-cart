const Item = require("./Item");

/**
 * Quick and dirty DAO for CRUD accounts' details
 */
class Mart {
  constructor() {
    this.categoryItemsMap = {
      fruit: [
        new Item("f1", "apple", 1.95),
        new Item("f2", "orange", 1.85),
        new Item("f3", "pear", 2.15),
        new Item("f4", "grapes", 4.95),
      ],
      meat: [
        new Item("mc1", "chicken thigh", 6.95),
        new Item("mc2", "chicken wings", 5.45),
        new Item("mc3", "chicken breast", 5.05),
      ],
      drink: [
        new Item("d1", "mineral water", 1.5),
        new Item("d2", "milk", 1.5),
        new Item("d3", "apple juice", 1.6),
        new Item("d4", "orange juice", 1.6),
      ],
    };
  }

  /**
   * @return {string[]} Array of category names
   */
  getCategories() {
    return Object.keys(this.categoryItemsMap);
  }

  /**
   * @param {string} category
   * @return {Item[]} Array of Item objects
   */
  getItems(category) {
    return this.categoryItemsMap[category] ?? [];
  }
}

module.exports = Mart;

// Testing
if (require.main === module) {
  const mgr = new Mart();

  console.log("Get categories");
  console.log(mgr.getCategories());

  console.log("Get items('fruit')");
  console.log(mgr.getItems("fruit"));

  console.log("Get items('unknown')");
  console.log(mgr.getItems("unknown"));
}