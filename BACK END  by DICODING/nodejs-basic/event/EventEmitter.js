const { EventEmitter } = require("events");
const myEventEmitter = new EventEmitter();

// fungsi yang akan dijalankan ketika event coffee-order terjadi
const makeCoffee = ({ name }) => {
  console.log(`Kopi ${name} telah dibuat!`);
};
const makeBill = (price) => {
    console.log(`Bill sebesar ${price} telah dibuat!`);
}
// mendaftarkan fungsi makeCoffee sebagai listener event coffee-order

const processing = ({ name, price }) => {
    makeCoffee(name);
    makeBill(price);
}
myEventEmitter.on('coffee-order', processing);

// memanggil event coffee-order
myEventEmitter.emit('coffee-order', { name: 'Tubruk', price: 15000 });
