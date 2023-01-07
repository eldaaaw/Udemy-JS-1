const defaultResult = 0;
let currentResult = defaultResult;
let logEnteries = []

function getUserInputNumber(){
  return parseInt(userInput.value)
}

function createAndWriteLog(operator, resultBeforeCalc, calcNumber){
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);


}

function log(operator,lastNum,eNumber,Tresult){
  logEntry = {
    operation : operator,
    previosNumber : lastNum,
    number : eNumber,
    result : Tresult
  };
  logEnteries.push(logEntry);
  console.log(logEnteries);
}

function add() {
  const enteredNumber = getUserInputNumber();
  initialResult = currentResult;
  currentResult += enteredNumber;
  createAndWriteLog("+",initialResult,enteredNumber);
  log("ADD", initialResult, enteredNumber, currentResult);
}

function substract(){
  const enteredNumber = getUserInputNumber();
  initialResult = currentResult;
  currentResult -= enteredNumber;
  createAndWriteLog("-",initialResult,enteredNumber);
  log('SUBSTRACT', initialResult, enteredNumber, currentResult);
}


function multiply(){554
  const enteredNumber = getUserInputNumber();
  initialResult = currentResult;
  currentResult *= enteredNumber;
  createAndWriteLog("*",initialResult,enteredNumber);
  log('MULTIPLICATION', initialResult, enteredNumber, currentResult)
}

function devide(){
  const enteredNumber = getUserInputNumber();
  initialResult = currentResult;
  currentResult /=  enteredNumber;
  createAndWriteLog("/",initialResult,enteredNumber);
  log('DIVIDISON', initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', substract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click',  devide);


alert(6/2(1+2))