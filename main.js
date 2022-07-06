`use strict`;

//Obtener elementos del html
const btn = document.querySelector(`.js-btn`);
const input = document.querySelector(`.js-input`);
const hint = document.querySelector(`.js-hint`);
const attemptsNumber = document.querySelector(`.js-attempst`);

//Variable para contar los intentos
let attempts = 0;

//Función para generar número random entre 1 y 100
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
};
const randomNumber = getRandomNumber(100);
console.log(randomNumber);

//Función para comparar números
const compareNumbers = (a, b) => {
    if (a > b) {
        return `Demasiado alto`;
    } else if (a < b) {
        return `Demadiado bajo`;
    } else {
        return `"Has ganado campeona"`;
    }
};

//Función manejadora del evento
const handleClick = (event) => {
    event.preventDefault();
    const inputValue = parseInt(input.value);
    if (inputValue < 1 || inputValue > 100) {
        hint.innerHTML = `"El número debe estar entre 1 y 100"`;
    } else {
        const compare = compareNumbers(inputValue, randomNumber);
        hint.innerHTML = compare;
    }
    attempts += 1
    attemptsNumber.innerHTML = `Número de intentos: ${attempts}`;
};

//El botón escucha el evento click y ejecuta la función handleClick
btn.addEventListener(`click`, handleClick);