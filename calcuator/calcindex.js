let num1 = 8
let num2 = 2
let sum = document.getElementById("sum-el")
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

function add() {
    let result = num1 + num2
    sum.textContent = "Sum: " + result
}

function subtract() {
    let result = num1 - num2
    sum.textContent = "Sum: " + result
}

function divide() {
    let result = num1 / num2
    sum.textContent = "Sum: " + result
}

function multiply() {
    let result = num1 * num2
    sum.textContent = "Sum: " + result
}
