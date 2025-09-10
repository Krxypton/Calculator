
// Addition
function add(a, b){
     let nA = Number(a); //Converting from string to integer
     let nB = Number (b); //Converting from string to integer
     operator = null;
     secondNum = "";

    if (answer == undefined ){
        answer = nA + nB;
        
        return display.textContent = answer;
    }
    else {
        answer = answer + nB;
        
        return display.textContent = answer;
    }
}

//Subtraction
function subtract(a, b){
    let nA = Number(a); //Converting from string to integer
    let nB = Number (b); //Converting from string to integer
    operator = null;
    secondNum = "";

    if (answer === undefined ){
        answer = nA - nB;
        operator = null;
    }
    else {
        answer = answer - nB;
        operator = null;
    }

    return display.textContent = answer;
}
//Multiplication
function multiply(a, b){
    let nA = Number(a); //Converting from string to integer
    let nB = Number (b); //Converting from string to integer
    operator = null;
    secondNum = "";

    if (answer === undefined ){
        answer = nA * nB;
        operator = null;
    }
    else {
        answer = answer * nB;
        operator = null;
    }

    return display.textContent = answer;
}

//Division
function divide(a, b){
    let nA = Number(a); //Converting from string to integer
    let nB = Number (b); //Converting from string to integer
    operator = null;
    secondNum = "";

    if (answer === undefined ){
        answer = nA/nB;
        operator = null;
    }
    else {
        answer = answer/nB;
        operator = null;
    }
    return display.textContent = answer;
}

let firstNum = "";
let secondNum = "";
let operator;
let answer; // Stores the answer we get from the first calculation

// When called it will decide what method of operation will occur
function operate(firstNum, secondNum, operator){
    switch(operator) {
        case "+":
            add(firstNum, secondNum);
            break;
        case "-":
            subtract(firstNum, secondNum);
            break;
        case "*":
            multiply(firstNum, secondNum);
            break;
        case "÷":
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
const multiplication = document.querySelector("#x");
const division =  document.querySelector("#division");
const addition = document.querySelector("#add");
const subtraction = document.querySelector("#subtract");
const equals = document.querySelector("#equal");

equals.addEventListener("click", (e) => {
    
    return operate(firstNum, secondNum, operator);
})

multiplication.addEventListener("click", (e) => {
    return operator = "*"
})

division.addEventListener("click", (e) => {
    return operator = "÷";
})

addition.addEventListener("click", (e) =>{
    return operator = "+"
})

subtraction.addEventListener("click", (e) => {
    return operator = "-"
})

clear.addEventListener("click", (e) => {
    firstNum = "";
    secondNum = "";
    operator = null;
    answer = null;

    return display.textContent = 0;
} )

one.addEventListener("click", (e) => {
    
    if(operator == undefined){   // Tests to see if a number is stored in either and which should it store in
        firstNum = firstNum + "1";
        return display.textContent = firstNum;
    }
    else{
        secondNum = secondNum + "1";
        return display.textContent = secondNum;
    }
});

two.addEventListener("click", (e) => {

     if(operator == undefined){
        firstNum = firstNum + "2";
        return display.textContent = firstNum;
    }
    else{
        secondNum = secondNum + "2"
        return display.textContent = secondNum;
    }
} )

three.addEventListener("click", (e) => {

     if(operator == undefined){
        firstNum = firstNum + "3";
        return display.textContent = firstNum;
    }
    else{
        secondNum = secondNum + "3"
        return display.textContent = secondNum;
    }
} )

four.addEventListener("click", (e) => {

     if(operator == undefined){
        firstNum = firstNum + "4";
        return display.textContent = firstNum;
    }
    else{
        secondNum = secondNum + "4"
        return display.textContent = secondNum;
    }
} )

five.addEventListener("click", (e) => {

     if(operator == undefined){
        firstNum = firstNum + "5";
        return display.textContent = firstNum;
    }
    else{
        secondNum = secondNum + "5"
        return display.textContent = secondNum;
    }
} )

six.addEventListener("click", (e) => {

     if(operator == undefined){
        firstNum = firstNum + "6";
        return display.textContent = firstNum;
    }
    else{
        secondNum = secondNum + "6"
        return display.textContent = secondNum;
    }
} )

seven.addEventListener("click", (e) => {

     if(operator == undefined){
       firstNum = firstNum + "7";
       return display.textContent = firstNum;
    }
    else{
        secondNum = secondNum + "7"
        return display.textContent = secondNum;
    }
} )

eight.addEventListener("click", (e) => {

     if(operator == undefined){
       firstNum = firstNum + "8";
       return display.textContent = firstNum;
    }
    else{
        secondNum = secondNum + "8"
        return display.textContent = secondNum;
    }
    
})

nine.addEventListener("click", (e) => {

     if(operator == undefined){
        firstNum = firstNum + "9";
        return display.textContent = firstNum;
    }
    else{
        secondNum = secondNum + "9"
        return display.textContent = secondNum;
    }
    
})

