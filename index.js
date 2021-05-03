const coffeeStock = require('./state');

const makeCoffee = (type, milligrams) => {
    if(coffeeStock[type] >= milligrams) {
        console.log("Kopi berhasil dibuat");
    } else {
        console.log("Biji kopi habis");
    }
}

makeCoffee("robusta", 180)
