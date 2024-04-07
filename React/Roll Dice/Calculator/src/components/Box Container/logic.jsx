// Function for format result value
const fixedPrecision = (num) => {
    // "0.1 + 0.2" = "0.30000000000000004" for handling this precison error

    // Return num if Not a Number
    // if (isNaN(num)) {
    //   return num
    // }

    let formattedResult

    if (Number.isInteger(num)) {
        formattedResult = num; // No need to adjust precision for whole numbers
    }
    else {
        formattedResult = parseFloat(num.toFixed(10)); // Adjust precision for decimal numbers
    }

    return formattedResult
}

// Evaluate the input expression
const evaluation = (expression) => {
    // Retrun if blank
    if (expression === "") {
        return ""
    }

    const lastChar = expression[expression.length - 1]
    const lastCharIsOperator = '+-*/%.'.includes(lastChar)
    let result
    // Try ... Catch block

    try {

        if (lastCharIsOperator) {
            /* If last character is operator then slice it for evalaution
            Example -> '12+' gives error 
            Here it slice it to '12'
            */

            result = Function(`return ${expression.slice(0, -1)}`)()
            return fixedPrecision(result)
        }

        else {
            // let result = evaluate(expression)
            result = Function(`return ${expression}`)()
            return fixedPrecision(result)
        }
    }
    // Throws Error
    catch (error) {
        return "Error " + error.message
    }
}

export default evaluation