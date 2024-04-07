import { useState, useEffect } from 'react'
import './boxContainer.css'
// Key Component for buttons
import Key from './Key'
// Evaluation Logic
import evaluation from './logic'


function BoxContainer() {
  // Keys inputs
  const keys = ['C', 'del', '%', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '=']
  // Input Value or Expression 
  const [inputExpression, setInputExpression] = useState('')
  // Output Value of input expression
  const [output, setOutput] = useState('')


  /* Handling input -> This function takes key value when button clicked  */

  const handleInput = (value) => {
    const operators = '+-*/%.'

    // Clear all values input and output
    if (value === 'C') {
      setInputExpression('')
      setOutput('')
    }

    // Delete value from input 
    else if (value === 'del') {
      const lastCharLen = inputExpression.length
      // Handle edge case when end value left
      if (lastCharLen === 1) {
        setInputExpression((previousValue) => previousValue.slice(0, -1))
        setOutput("")
      }
      else {
        setInputExpression((previousValue) => previousValue.slice(0, -1))
      }
    }

    // Show equal value
    else if (value === '=') {
      setInputExpression('')
    }

    // Handle consecutive operators to prevent error
    else if (operators.includes(value)) {
      const lastChar = inputExpression[inputExpression.length - 1]
      const lastCharIsOperator = operators.includes(lastChar)

      // Check last character is operator and current value is different from last operator
      if (lastCharIsOperator && lastChar !== value) {
        setInputExpression((previousValue) => previousValue.slice(0, -1) + value)
      }
      else if (!lastCharIsOperator) {
        setInputExpression((previousValue) => previousValue + value);
      }
    }

    else {
      setInputExpression((previousValue) => previousValue + value);
    }
  }

  useEffect(() => {
    // Handle Clear input and keeps output 
    if (inputExpression === "" && output !== "") {
      // Do nothing
    }
    else {
      setOutput(evaluation(inputExpression))
    }
  }, [inputExpression])


  // Render Buttons in UI
  const keyList = keys.map((key, index) => {
    return <Key key={index} val={key} handleClick={handleInput} />
  })


  return (
    <section className='box-container'>
      <div className="expression-display">
        <p className="input-expression scroll-text">{inputExpression}</p>
        <p className="output">{output}</p>
      </div>

      <div className="button-list">
        {keyList}
      </div>
    </section>
  )
}

export default BoxContainer