/**
 * TODO 1 (Tiger.js):
 * Ekspor nilai dari class Tiger
 *
 * TODO 2 (Wolf.js)
 * Ekspor nilai dari class Wolf
 *
 * TODO 3 (main.js)
 * Impor class Tiger dan Wolf
 *
 * TODO 4 (main.js)
 * Ekspor fungsi fight, myTiger, myWolf, dan result
 *
 */

// TODO 3
const Tiger = require("./Tiger.js");
const Wolf = require("./Wolf.js");

const fight = (tiger, wolf) => {
  if (tiger.strength > wolf.strength) {
    return tiger.growl();
  }
  if (wolf.strength > tiger.strength) {
    return wolf.howl();
  }
  return "Harimau dan serigala sama-sama kuat!";
};

const myTiger = new Tiger();
const myWolf = new Wolf();

const result = fight(myTiger, myWolf);

// TODO 4
module.exports = { fight, myTiger, myWolf, result };

console.log(result);

Tiger.js;

class Tiger {
  constructor() {
    this.strength = Math.floor(Math.random() * 100);
  }

  growl() {
    return "grrrrrrr";
  }
}
// TODO 1

module.exports = Tiger;
Wolf.js;

class Wolf {
  constructor() {
    this.strength = Math.floor(Math.random() * 100);
  }

  howl() {
    return "Auuuuuuuuu";
  }
}

// TODO 2

module.exports = Wolf;
