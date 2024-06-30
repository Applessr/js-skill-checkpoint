// Question #1: Inventory Management

const inventory = {
  apple: { price: 35, quantity: 100 },
  banana: { price: 10, quantity: 50 },
};

inventory.apple.quantity = 200;

inventory.orange = { price: 20, quantity: 300 };

let totalValue = 0;
for (let item in inventory) {
  const product = inventory[item];
  totalValue += product.price * product.quantity;
}

console.log(`Total inventory value: ${totalValue} baht`);
