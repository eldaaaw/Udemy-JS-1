const defaultResult = 0;
let currentResult = defaultResult;

function getUserInputNumber(){
  return parseInt(userInput.value)
}

function add() {
  const enteredNumber = getUserInputNumber();
  const calcDescription = `${currentResult} + ${enteredNumber}`;
  currentResult = currentResult + enteredNumber;
  outputResult(currentResult, calcDescription);
}

function substract(){}


function multiply(){
  
}

function devide(){
  
}

addBtn.addEventListener('click', add);
