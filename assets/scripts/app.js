const defaultResult = 0;
let currentResult = defaultResult;

function getUserInputNumber(){
  return parseInt(userInput.value)
}

function createAndWriteLog(operator, resultBeforeCalc, calcNumber){
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);


}

function add() {
  const enteredNumber = getUserInputNumber();
  initialResult = currentResult;
  currentResult = currentResult + enteredNumber;
  createAndWriteLog("+",initialResult,enteredNumber);
}

function substract(){
  const enteredNumber = getUserInputNumber();
  initialResult = currentResult;
  currentResult = currentResult - enteredNumber;
  createAndWriteLog("-",initialResult,enteredNumber);

}


function multiply(){
  const enteredNumber = getUserInputNumber();
  initialResult = currentResult;
  currentResult = currentResult * enteredNumber;
  createAndWriteLog("*",initialResult,enteredNumber);
}

function devide(){
  const enteredNumber = getUserInputNumber();
  initialResult = currentResult;
  currentResult = currentResult / enteredNumber;
  createAndWriteLog("/",initialResult,enteredNumber);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', substract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click',  devide);


