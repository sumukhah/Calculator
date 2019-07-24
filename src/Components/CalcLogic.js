const CalcLogic = (text, state) => {
  
  let {operatorSelected, firstNumber, secondNumber} = state;
  let SecondOperator;

  if (text==='AC') {
    return  {
      operatorSelected : '',
      firstNumber : '',
      secondNumber : '',
    };
  }

  else if (text==='DEL') {
    secondNumber?secondNumber=String(secondNumber).substring(0, secondNumber.length-1):(firstNumber = String(firstNumber).substring(0,firstNumber.length -1))
  }
  
  else if (text%1===0 || text==='.') {
      operatorSelected===''? firstNumber=firstNumber+text:secondNumber=secondNumber+text
    }
   
  else if (text==='+/-') {
      firstNumber = 0 - firstNumber
    }

  else if (text!=='=')
    {
      operatorSelected?(SecondOperator=text):(operatorSelected=text)
    }

  if ((text==='=' && secondNumber!=='')||(SecondOperator&&secondNumber!=='')) {
  firstNumber = Number(firstNumber)
  secondNumber = Number(secondNumber)
  console.log(SecondOperator) 

  switch (operatorSelected) {
  
    case '+':
        firstNumber = firstNumber+secondNumber;
        break;
    case '-':
          firstNumber = firstNumber-secondNumber;
          break;
    case 'x':
          firstNumber = firstNumber*secondNumber;
          break;
        
    case '÷':
          firstNumber = firstNumber/secondNumber;
          break;
    case '^':
          firstNumber = firstNumber**secondNumber;
          break;
    default :
           firstNumber = 'Math error';
  }
  secondNumber = ''
  operatorSelected = SecondOperator?SecondOperator:''
  // SecondOperator
  }


  // console.log(SecondOperator)  
  return state = {operatorSelected, firstNumber, secondNumber};
}

export default CalcLogic