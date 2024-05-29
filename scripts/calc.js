/*
calculateResult function uses as caluclator of two numbers
num1 is variable to get the first input filed value
num2 is variable to get the second input filed value
operation is variable to get the type of operation from dropdown
result is to calculate the value of two numbers based on the operation and display the result 

*/

function calculateResult() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var operation = document.getElementById('operation').value;
    var result = document.getElementById('result');

    if (isNaN(num1) || isNaN(num2)) {
        result.textContent = 'Please enter valid numbers.';
        return;
    }

    if (operation === 'add') {
        result.textContent = 'Result: ' + (num1 + num2);
    } else if (operation === 'subtract') {
        result.textContent = 'Result: ' + (num1 - num2);
    } else if (operation === 'multiply') {
        result.textContent = 'Result: ' + (num1*num2);
    } else {
        result.textContent = 'Invalid operation selected.';
    }
}

/*
calculateTIP function uses calculate the tip
num1 is variable to get the input filed value
result is to calculate total of the percentage and add the actual amount and display the result

*/
function calculateTip() {
    //alert("hello");
    var num1 = parseFloat(document.getElementById('num3').value);
    var result1 = document.getElementById('result1');

    if (num1 >= 50 && num1 <= 300) {
        result1.textContent = Math.round(num1 * 0.10,1);
    } else if (num1 > 300) {
        result1.textContent = Math.round(num1 * 0.15,1);
    } else {
        result1.textContent = 0;
    }
    //return result1;
}

