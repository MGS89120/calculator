let numOne = prompt("первое число");
let znak = prompt(`знак действия:
"+" - сложение
"-" - вычитание
"*" - умножение
"/" - деление
"**" - возведение в степень
`);
let numTwo = prompt("второе число");
numOne = +numOne;
numTwo = +numTwo;

if (znak === "+") {
    x = numOne + numTwo;
}

else if (znak === "-") {
    x = numOne - numTwo;
}
 else if (znak === "*") {
    x = numOne * numTwo;
 }

 else if (znak === "/") {
    x = numOne / numTwo;
 }

 else if (znak === "**") {
    x = numOne ** numTwo;
 }

else {
    alert("произошла ошибка, пожалуйста, перезагрузите страницу")
}
alert(
    `${numOne} ${znak} ${numTwo} = ${x}`
); 