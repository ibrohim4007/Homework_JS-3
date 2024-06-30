const number = +prompt("Введите число:")
if (isNaN(number)) {
    alert("Error - Введите число");
}


if (number === 1) {
    alert(`1 banana`);
} else{
    alert(`${number} bananas`);
}




function mathBtn() {
    const number1 = prompt("Введите число:");
    if (isNaN(number1) || number1 === 0) {
        alert("Пожалуйста, введите корректное число, которое не равно 0.");
        return;
    }

    const number2 = prompt("Введите число:");
    if (isNaN(number2) || number2 === 0) {
        number2 = 2;
    }

    let result = 1;
    for (let i = 0; i < number2; i++) {
        result *= number1;
    }



    alert(`Результат: ${result}`);
}
mathBtn();

















