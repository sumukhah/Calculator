const CalcLogic = (text, state) => {
  
  let operatorOverload;

  let {operatorSelected, firstNumber, secondNumber} = state;
  
  if (text%1===0 || text==='.') {
    operatorSelected===''? firstNumber=firstNumber+text:secondNumber=secondNumber+text;
  }

  else 
  if (text==='AC') {
    return  {
      operatorSelected : '',
      firstNumber : '',
      secondNumber : '',
    };
  }
  
  else 
  if (text==='+/-') {
     firstNumber = 0 - firstNumber
  }

  else if (text==='%') {
    firstNumber = firstNumber/100;
    secondNumber = ''
    operatorSelected = ''
  }

  else
   { operatorOverload = text!=='='&&operatorSelected!==''?text:null
     operatorSelected = text==='='?operatorSelected:text;
  }



  if  (text==='=' || operatorOverload)
  {

  firstNumber = Number(firstNumber);
  secondNumber = Number(secondNumber);

  // if (operatorSelected==='÷' && secondNumber===0) {
  //    firstNumber = 'Infinity';
  //    secondNumber = ''
  // }
 if (firstNumber!=='' && secondNumber!=='') {
  switch (operatorSelected) {
  
    case '+':
        firstNumber = firstNumber+secondNumber;
        secondNumber = ''
        break;
    
        case '-':
          firstNumber = firstNumber-secondNumber;
          secondNumber = ''
          break;
        
        case 'x':
          firstNumber = firstNumber*secondNumber;
          secondNumber = ''
          break;
        
        case '÷':
          firstNumber = secondNumber!==0?(firstNumber/secondNumber):'error';
          secondNumber = ''
          operatorSelected = ''
          break;

        case '^':
          firstNumber = firstNumber**secondNumber;
          secondNumber = ''
          break;
        
        // case '=':
        //   return {operatorSelected:'', firstNumber, secondNumber:''}
        
        default :
           firstNumber = 'Math error';
           secondNumber = '';


  }}
  }

  return state = {operatorSelected, firstNumber, secondNumber};

}

 

export default CalcLogic