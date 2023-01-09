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

function calculationResult(calculationType){
  const enteredNumber = getUserInputNumber();
  const initialResult = currentResult;
  let math0preation;
  if (calculationType === "ADD"){
    currentResult += enteredNumber;
    math0preation = "+";

  }else if (calculationType === "substract"){
    currentResult -= enteredNumber;
    math0preation = "-";

  } else if (calculationType === "multiply"){
    currentResult *= enteredNumber;
    math0preation = "*";

  } else if (calculationType === "divide"){
    currentResult /= enteredNumber;
    math0preation = "/";

  }
  
  createAndWriteLog(math0preation, initialResult, enteredNumber);
  log(calculationType, initialResult, enteredNumber, currentResult);
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
  calculationResult("ADD")
}

function substract(){
  calculationResult("substract")
}


function multiply(){554
  calculationResult("multiply")
}

function devide(){
 calculationResult("divide")
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', substract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click',  devide);

