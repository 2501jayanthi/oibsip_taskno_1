// script.js
const display = document.getElementById('display');
const numButtons = document.querySelectorAll('.num-btn');
const operatorButtons = document.querySelectorAll('.operator-btn');
const equalsButton = document.getElementById('equals-btn');
const clearButton = document.getElementById('clear-btn');
const deleteButton = document.getElementById('delete-btn')

let currentInput = '';
let operator = '';
let previousInput = '';

numButtons.forEach(button => {
    button.addEventListener('click', () => {
        currentInput += button.textContent;
        display.value = currentInput;
    });
});

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        operator = button.textContent;
        if (operator === '%') {
            currentInput = (parseFloat(currentInput) / 100).toString();
            display.value = currentInput;
        } else {
            previousInput = currentInput;
            currentInput = '';
        }
    });
});

equalsButton.addEventListener('click', () => {
    if (previousInput !== '' && currentInput !== '') {
        switch (operator) {
            case '+':
                currentInput = (parseFloat(previousInput) + parseFloat(currentInput)).toString();
                break;
            case '-':
                currentInput = (parseFloat(previousInput) - parseFloat(currentInput)).toString();
                break;
            case '*':
                currentInput = (parseFloat(previousInput) * parseFloat(currentInput)).toString();
                break;
            case '/':
                currentInput = (parseFloat(previousInput) / parseFloat(currentInput)).toString();
                break;
            
        }
        display.value = currentInput;
    }
});

clearButton.addEventListener('click', () => {
    currentInput = '';
    operator = '';
    previousInput = '';
    display.value = '';
});

deleteButton.addEventListener('click', () => {
    currentInput = currentInput.slice(0, -1); // Remove the last character
    display.value = currentInput;
});