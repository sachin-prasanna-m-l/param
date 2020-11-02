var displayContent="";
var input = "";
var buttonContent;
var operator="";
var operand1,operand2;
var ans=0;
function updateDisplay(button){
    buttonContent = button.toString();
    if(!Number.isInteger(parseInt(buttonContent))){
        operator = buttonContent;
    }
    input+=buttonContent;
    displayContent = input;
    document.getElementById('text').innerHTML = displayContent;
}
function calculate(){
    var number1 = parseInt(operand1);
    var number2 = parseInt(operand2);
    switch (operator){
        case '+':{
            ans=number1+number2;
            break;
        }
        case '-':{
            ans=number1-number2;
            break;
        }
        case '*':{
            ans=number1*number2;
            break;
        }
        case '/':{
            ans=number1/number2;
            break;
        }
    }
    operand1 = ans.toString();
    input = operand1;
    document.getElementById('text').innerHTML = ans.toString();
}
function clearScreen(){
    ans = 0;
    currentContent = "";
    input = "";
    displayContent = "";
    document.getElementById('text').innerHTML = "0";
}
function showResult(){
    var operands = input.split(operator);
    operand1 = operands[0];
    operand2 = operands[1];
    calculate();
}