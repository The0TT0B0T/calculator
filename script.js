const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.btn');

let firstNumber = '';
let secondNumber = '';
let operator = '';

const add = (a,b) => {    
        return a + b;
}
const subtract = (a,b) => {
    return a - b;
};

const multiply = (a,b) => {
    return a * b;
}
const divide = (a,b) => {
    return a / b;
}
const remainder = (a,b) => {
    return a % b;
}
const operate = (operator, a, b) => {
    a = parseFloat(a);
    b = parseFloat(b);

    switch(operator) {
        case '+':
            return add(a,b);
        case '-':
            return subtract(a,b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        case '%':
            return remainder(a,b);
        default:
            return null;
    }
};

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const num = button.value;
        if(!isNaN(num)) {
            if(!operator || num === '.') {
                firstNumber += num;
                display.textContent = firstNumber;
            }
            else {
                secondNumber += num;
                display.textContent = secondNumber;
            }
        }
        else if (num === '+' || num === '-' || num === '*' || num === '/' || num === '%') {
            operator = num;
        }
        else if(num === '=') {
            const result = operate(operator, firstNumber, secondNumber);
            display.textContent = result;

            firstNumber = result.toString();
            secondNumber = '';
            operator = '';
        }
        else if (num === 'AC') {
            firstNumber = '';
            secondNumber = '';
            operator = '';
            display.textContent = 0;
        }
        else if (num === 'Del') {
            if(secondNumber) {
                secondNumber = secondNumber.slice (0, -1);
                display.textContent = secondNumber;
            }
            else if (firstNumber) {
                firstNumber = firstNumber.slice(0, -1);
                display.textContent = firstNumber || '0';
            }
        }
    })
});

