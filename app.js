function calculate() {
    let num1 = parseFloat(document.getElementById('num1').value);
    console.log(num1);

    let num2 = parseFloat(document.getElementById('num2').value);
    console.log(num2);

    let operand = document.getElementById('arithmetic').value;
    let result = 0;
    if (operand == 'add') {
        result = num1 + num2;
    }
    else if (operand == 'sub') {
        result = num1 - num2;
    }
    else if (operand == 'mul') {
        result = num1 * num2;
    }
    else if (operand == 'divide') {
        result = num1 / num2;
    }
    else if (operand == 'reminder') {
        result = num1 % num2;
    }

    console.log(result)

    // if ((isNaN(result))) {
    //     document.getElementById('answer').value = "";
    // }

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('answer').value = "Enter both the numbers";
    }
    else {
        document.getElementById('answer').value = result;
    }
    // document.write(result);
    // alert(result);
    // prompt(result);

}
