
// Addition
function add(a, b){
    return a + b;
}

//Subtraction
function subtract(a, b){
    return a - b;
}
//Multiplication
function multiply(a, b){
    return a * b;
}

//Division
function divide(a, b){
    return a/b;
}

let firstNum;
let secondNum;
let operator;

// When called it will decide what method of operation will occur
function operate(firstNum, secondNum, operator){
    switch(operator) {
        case "+":
            add(firstNum, secondNum);
            break;
        case "-":
            subtract(firstNum, secondNum);
            break;
        case "x":
            multiply(firstNum, secondNum);
            break;
        case "/":
            divide(firstNum, secondNum);
            break;
    }
}

const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const display = document.querySelector(".display");
const clear = document.querySelector("#clear");

one.addEventListener("click", (e) => {
    
    if(firstNum === null){
        firstNum = 1;
    }
    else{
        secondNum = 1;
        operate(firstNum,secondNum, operator);
    }
    
    return display.textContent = 1;
});

two.addEventListener("click", (e) => {

     if(firstNum === null){
        firstNum = 2;
    }
    else{
        secondNum = 2;
        operate(firstNum,secondNum, operator);
    }


    return display.textContent = 2;
} )

three.addEventListener("click", (e) => {

     if(firstNum === null){
        firstNum = 3;
    }
    else{
        secondNum = 3;
        operate(firstNum,secondNum, operator);
    }

    return display.textContent = 3;
} )

four.addEventListener("click", (e) => {

     if(firstNum === null){
        firstNum = 4;
    }
    else{
        secondNum = 4;
        operate(firstNum,secondNum, operator);
    }

    return display.textContent = 4;
} )

five.addEventListener("click", (e) => {

     if(firstNum === null){
        firstNum = 5;
    }
    else{
        secondNum = 5;
        operate(firstNum,secondNum, operator);
    }

    return display.textContent = 5;
} )

six.addEventListener("click", (e) => {

     if(firstNum === null){
        firstNum = 6;
    }
    else{
        secondNum = 6;
        operate(firstNum,secondNum, operator);
    }

    return display.textContent = 6
} )

seven.addEventListener("click", (e) => {

     if(firstNum === null){
        firstNum = 7;
    }
    else{
        secondNum = 7;
        operate(firstNum,secondNum, operator);
    }

    return display.textContent = 7;
} )

eight.addEventListener("click", (e) => {

     if(firstNum === null){
        firstNum = 8;
    }
    else{
        secondNum = 8;
        operate(firstNum,secondNum, operator);
    }
    
    return display.textContent = 8;
})

nine.addEventListener("click", (e) => {

     if(firstNum === null){
        firstNum = 9;
    }
    else{
        secondNum = 9;
        operate(firstNum,secondNum, operator);
    }
    
    return display.textContent = 9;
})

