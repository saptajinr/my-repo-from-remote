import coffeeStock from './state.js';

const displayStock = stock => {
    for (const type in stock) {
        console.log(type);
    }
}

displayStock(coffeeStock);

/* const {coffeeStock, isCoffeeMachineReady} = require('./state');

const makeCoffee = (type, milligrams) => {
    if(coffeeStock[type] >= milligrams) {
        console.log("Kopi berhasil dibuat");
    } else {
        console.log("Biji kopi habis");
    }
}

//makeCoffee("robusta", 180)
console.log(coffeeStock);
console.log(isCoffeeMachineReady); */
