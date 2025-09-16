const priceEtanol = 5.79; // preço do etanol
const priceGasoline = 6.66; // preço da gasolina
const priceDiesel = 5.29; // preço do diesel
const kmperLiterEtanol = 8.5; // km por litro do etanol
const kmperLiterGasoline = 12.0; // km por litro da gasolina
const kmperLiterDiesel = 14.4; // km por litro do diesel
const distance = 100; // distância em km
let totalPrice = 0;
const fuelType = 'Gasolina';
const fuelPrice = [priceEtanol, priceGasoline, priceDiesel];
const kmPerLiter = [kmperLiterEtanol, kmperLiterGasoline, kmperLiterDiesel];

if (fuelType === 'Etanol') {
    totalPrice = (distance / kmperLiterEtanol) * priceEtanol;
    console.log(`O preço total para percorrer ${distance} km com ${fuelType} é R$ ${totalPrice.toFixed(2)}`);
} else if (fuelType === "Gasolina") {
    totalPrice = (distance / kmperLiterGasoline) * priceGasoline;
    console.log(`O preço total para percorrer ${distance} km com ${fuelType} é R$ ${totalPrice.toFixed(2)}`);
} else if (fuelType === "Diesel") {
    totalPrice = (distance / kmperLiterDiesel) * priceDiesel;
    console.log(`O preço total para percorrer ${distance} km com ${fuelType} é R$ ${totalPrice.toFixed(2)}`);
} else {
    console.log("Tipo de combustível inválido.");
}