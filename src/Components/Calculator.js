import React from 'react';
import TouchKeys from './TouchKeys';
import Result from './Result';
import styles  from './Calculator.css'
import CalcLogic from './CalcLogic'

const DisplayKeys = [
  {text: '7'},
  {text: '8'},
  {text: '9'},
  {text: 'AC', type: 'Operator'},
  {text: '4'},
  {text: '5'},
  {text: '6'},
  {text: 'DEL', type: 'Operator'},  
  {text: '1'},
  {text: '2'},
  {text: '3'},
  {text: '+', type: 'Operator'},
  {text: '+/-', type: 'Operator'},
  {text: '0'},
  {text: '.'},
  {text: '-', type: 'Operator'},
  
  {text: '^', type: 'operator'},
  {text: 'x', type: 'Operator'},
  {text: '÷', type: 'Operator'},
  {text: '=', type: 'Operator'},
]

class Calculator extends React.Component {

  state = {

    operatorSelected : '',
    firstNumber : '',
    secondNumber : '',
  }

  onClickHandler(text) {
    this.setState(CalcLogic(text, this.state))
    console.log(this.state)
  }

  render() {
    return (
      <div className="Calculator">
        <div className="container">
             <i className="github square icon big"></i>
           
          <div className='ResultScreen'>
            <Result output={this.state.secondNumber!=='' && this.state.operatorSelected!==''?this.state.secondNumber:this.state.firstNumber}/>
          </div>
        
          <div className="grid">
            {DisplayKeys.map(
              (txt, index) => <TouchKeys 
                                text={txt.text}  
                                type={txt.type} 
                                key={txt.text} 
                                onClickHandler={this.onClickHandler.bind(this, txt.text)}
                              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;