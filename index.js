import { addition, subtract, multiply, divide } from "./utils.js";


document.addEventListener('DOMContentLoaded', function() {
    let num1, operator, num2;
    let display = document.querySelector('.display');
    let equalBtn = document.querySelector('.equalBtn');
    let clear = document.querySelector('.clear');
    let cancel = document.querySelector('.cancel');
    let summary = document.querySelector('.summary');
    let current = document.querySelector('.current');

    let populate = document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click, keydown', (event) => {
            let input = btn.textContent
            if (input == "/" || input == "x" || input == "+" || input == "-") {
                operator = input  
                
                num1 = current.textContent;

                // if float
                if (num1.includes('.')) {
                    num1 = parseFloat(num1);
                }
                else {
                    num1 = parseInt(num1)
                }

                summary.textContent = num1 + " " + input;
                current.textContent = ""

            }
            
            if (input == "=") {

                num2 = current.textContent;
                
                // if float
                if (num2.includes('.')) {
                    num2 = parseFloat(num2)
                }
                else {
                    num2 = parseInt(num2)
                }

                summary.textContent = ""
                let answer = operate(num1, operator, num2);
                console.log(answer)
                if (isNaN(answer)) {
                    current.textContent = "ERROR";
                }
                else {
                    current.textContent = answer
                }
                num1 = ""; 
                num2 = "";
            }

            if (input == '.') {  
                var currentInput = current.textContent;
                if (currentInput.includes('.')) {
                    let dot = document.getElementById('dot');
                    dot.classList.add("disabled-dot");
                    dot.classList.remove('digit')
                }
            }
            if (btn.classList.contains('digit')) {
                
                current.textContent += input
            }

            if (event.keyCode >=48 && event.keyCode <= 57) [
                current.textContent += String.fromCharCode(event.keyCode)
            ]

        })

    })

    
    // cancel current input
    cancel.addEventListener('click', () => {
        current.textContent = "";
        // add back digit class to dot
        dot.classList.add('digit')
        dot.classList.remove('disabled-dot')
    })

    // clear the screen
    clear.addEventListener('click', () => {
        current.textContent = "";
        summary.textContent = "";

        dot.classList.add('digit')
        dot.classList.remove('disabled-dot')
    })

})



const operate = (num1, operator, num2) => {

    if (operator == "x") {
        return multiply(num1, num2)
    }

    else if(operator == "/") {
        return divide(num1, num2)
    }

    else if(operator == "-") {
        return subtract(num1, num2)
    }

    else {
        return addition(num1, num2)
    }
}

