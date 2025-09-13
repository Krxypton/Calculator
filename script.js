
// Addition
function add(a, b){
     let nA = Number(a); //Converting from string to integer
     let nB = Number (b); //Converting from string to integer
     operator = "";
     secondNum = "";

    if (answer == undefined ){
        answer = nA + nB;
        
        let rounded = Math.round(answer * 10)/10;
        display.textContent = rounded;
        return firstNum = rounded;
    }
    else {
        answer = answer + nB;
        let rounded = Math.round(answer * 10)/10;
        display.textContent = rounded
        return firstNum = rounded;
    }
}

//Subtraction
function subtract(a, b){
    let nA = Number(a); //Converting from string to integer
    let nB = Number (b); //Converting from string to integer
    operator = "";
    secondNum = "";

    if (answer === undefined ){
        answer = nA - nB;
        
        let rounded = Math.round(answer * 10)/10;
        display.textContent = rounded
        return firstNum = rounded;
    }
    else {
        answer = answer - nB;
        
        let rounded = Math.round(answer * 10)/10;
        display.textContent = rounded
        return firstNum = rounded;
    }

    
}
//Multiplication
function multiply(a, b){
    let nA = Number(a); //Converting from string to integer
    let nB = Number (b); //Converting from string to integer
    operator = "";
    secondNum = "";

    if (answer === undefined ){
        answer = nA * nB;
        
        let rounded = Math.round(answer * 10)/10;
        display.textContent = Math.round(answer * 10)/10;;
        return firstNum = rounded;
    }
    else {
        answer = answer * nB;
        let rounded = Math.round(answer * 10)/10;

        display.textContent = rounded
        return firstNum = rounded;
    }

    
}

//Division
function divide(a, b){
    let nA = Number(a); //Converting from string to integer
    let nB = Number (b); //Converting from string to integer
    operator = "";
    secondNum = "";

    if(nB === 0){
        let error = "Can't divide by 0";
        return display.textContent = error;
    }
    if (answer === undefined ){
        answer = nA / nB;
        
        let rounded = Math.round(answer * 10)/10;
        display.textContent = rounded
        return firstNum = rounded;
    }
    else {
        answer = answer / nB;

        let rounded = Math.round(answer * 10)/10;
        display.textContent = rounded;
        return firstNum = rounded;
    }
;
}

let firstNum = "";
let secondNum = "";
let operator = ""
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
const zero = document.querySelector("#zero")


equals.addEventListener("click", (e) => {
    
    return operate(firstNum, secondNum, operator);
})

multiplication.addEventListener("click", (e) => {
   if(operator == ""){
        operator = "*"
        return display.textContent = firstNum + operator;
    }
    else {
        return display.textContent = firstNum + operator + secondNum;
    }
})

division.addEventListener("click", (e) => {
    if(operator == ""){
        operator = "÷"
        return display.textContent = firstNum + operator;
    }
    else {
        return display.textContent = firstNum + operator + secondNum;
    }
})

addition.addEventListener("click", (e) =>{
    if(operator == ""){
        operator = "+"
        return display.textContent = firstNum + operator;
    }
    else {
        return display.textContent = firstNum + operator + secondNum;
    }
})

subtraction.addEventListener("click", (e) => {
     if(operator == ""){
        operator = "-"
        return display.textContent = firstNum + operator;
    }
    else if(secondNum == "") {
        operator = "-"
        secondNum += operator
        return display.textContent = firstNum + operator + secondNum;
    }
    else {
       return display.textContent = firstNum + operator + secondNum;
    }   
})

clear.addEventListener("click", (e) => {
    firstNum = "";
    secondNum = "";
    operator = "";
    answer = undefined;

    return display.textContent = 0;
} )


zero.addEventListener("click", (e) => {
    if(operator == ""){   // Tests to see if a number is stored in either and which should it store in
        firstNum = operator + firstNum + "0";
        return display.textContent = firstNum;
    }
    else{
        secondNum = secondNum + "0";
        return display.textContent = firstNum + operator + secondNum;
    }
})
one.addEventListener("click", (e) => {
    if(firstNum == ""){   // 
        firstNum = operator + firstNum + "1";
        display.textContent = firstNum;
        return operator = "";
    }
    else{
        secondNum = secondNum + "1";
       return display.textContent = firstNum + operator + secondNum;
    }
});

two.addEventListener("click", (e) => {

     if(firstNum == ""){
        firstNum = operator + firstNum + "2";
        display.textContent = firstNum;
        return operator = "";
    }
    else{
        secondNum = secondNum + "2"
        return display.textContent = firstNum + operator + secondNum;
    }
} )

three.addEventListener("click", (e) => {

    if(firstNum == ""){   // 
        firstNum = operator + firstNum + "3";
        display.textContent = firstNum;
        return operator = "";
    }
    else{
        secondNum = secondNum + "3";
        return display.textContent = firstNum + operator + secondNum;
    }
} )

four.addEventListener("click", (e) => {

    if(operator == ""){   
        firstNum = operator + firstNum + "4";
        display.textContent = firstNum;
        return operator = "";
    }
    else{
        secondNum = secondNum + "4";
       return display.textContent = firstNum + operator + secondNum;
    }
} )

five.addEventListener("click", (e) => {
 
    if(operator == ""){   
        firstNum = operator + firstNum + "5";
        display.textContent = firstNum;
        return operator = "";
    }
    else{
        secondNum =  secondNum + "5";
        return display.textContent = firstNum + operator + secondNum;
    }
} )

six.addEventListener("click", (e) => {
 
    if(operator == ""){   
        firstNum = operator + firstNum + "6";
        display.textContent = firstNum;
        return operator = "";
    }
    else{
        secondNum = secondNum + "6";
       return display.textContent = firstNum + operator + secondNum;
    }
} )

seven.addEventListener("click", (e) => {

    if(operator == ""){    
        firstNum = operator + firstNum + "7";
        display.textContent = firstNum;
        return operator = "";
    }
    else{
        secondNum = secondNum + "7";
        return display.textContent = firstNum + operator + secondNum;
    }
} )

eight.addEventListener("click", (e) => {

    if(operator == ""){   // 
        firstNum = operator + firstNum + "8";
        display.textContent = firstNum;
        return operator = "";
    }
    else{
        secondNum =  secondNum + "8";
        return display.textContent = firstNum + operator + secondNum;
    }
})

nine.addEventListener("click", (e) => {

     
    if(operator == ""){   // 
        firstNum = operator + firstNum + "9";
        display.textContent = firstNum;
        return operator = "";
    }
    else{
        secondNum =  secondNum + "9";
        return display.textContent = firstNum + operator + secondNum;
    }
    
})

