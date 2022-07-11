`use strict`;

//Obtener elementos del html y asignar a la constante
const btn = document.querySelector(`.js-btn`);
const input = document.querySelector(`.js-input`);
const hint = document.querySelector(`.js-hint`);
const attemptsNumber = document.querySelector(`.js-attempst`);

//Función para generar número random entre 1 y 100
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
};
let randomNumber = getRandomNumber(100);
console.log(randomNumber);

//Función para comparar números
const compareNumbers = (a, b) => {
    if (a > b) {
        return `Demasiado alto`;
    } else if (a < b) {
        return `Demasiado bajo`;
    } else {
        return `"Has ganado campeona"`;
    }
};

//Función para validar la entrada del usuario
const checkValidInput = (inputValue) => {
    if (isNaN(inputValue)) {
        writeHtml(hint, `Debe introducir un número válido`);
    } else if (inputValue < 1 || inputValue > 100) {
        writeHtml(hint, `"El número debe estar entre 1 y 100"`);
    } else {
        const compare = compareNumbers(inputValue, randomNumber);
        writeHtml(hint, compare);
    }
}

//Función innerHTML
const writeHtml = (element, text) => {
    element.innerHTML = text;
}

//Variable y función para contar los intentos
let attempts = 0;

const updateAttempts = () => {
    attempts += 1;
    writeHtml(attemptsNumber, `Número de intentos: ${attempts}`);
}

//Función manejadora del evento
const handleClick = (event) => {
    event.preventDefault();
    if (input.value === ``) {
        writeHtml(hint, `"Debe introducir al menos un número"`);
    } else {
        const inputValue = parseInt(input.value);
        checkValidInput(inputValue);
    }
    updateAttempts();
};

//El botón escucha el evento click y ejecuta la función handleClick
btn.addEventListener(`click`, handleClick);

//Reset button
const resetButton = document.querySelector('.js-reset');

const handleClickReset = (ev) => {
    ev.preventDefault();
    input.value = ``;
    hint.innerHTML = `Pista: Escribe el número y dale a Prueba`;
    attemptsNumber.innerHTML = `Número de intentos: 0`;
    randomNumber = getRandomNumber(100);
    console.log("🚀 ~ file: main.js ~ line 72 ~ handleClickReset ~ randomNumber", randomNumber)
    attempts = 0;
};


resetButton.addEventListener('click', handleClickReset);