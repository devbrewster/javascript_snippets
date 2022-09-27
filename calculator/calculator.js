// Class
class Calculator {
  // constructor will take in all of the inputs for the calculator
  constructor(previousOperandTextElement, currentOperandTextElement) {
    //The variables below sets the TextElements for the class
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.clear();
  }

  // clear() - as it implies clears the calculator
  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }

  // delete() removes a single digit
  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  }

  // appendNumber(number) - adds a number to the screen
  appendNumber(number) {
    if (number === "." && this.currentOperand.includes(".")) return;
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  // chooseOperation(operation) passes the operation the user selected
  chooseOperation(operation) {
    if (this.currentOperand === "") return;
    if (this.previousOperand !== "") {
      this.compute();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = "";
  }

  // compute() - calculates the results
  compute() {
    let computation;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (this.operation) {
      case "+":
        computation = prev + current;
        break;
      case "-":
        computation = prev - current;
        break;
      case "\u00F7":
        computation = prev / current;
        break;
      case "*":
        computation = prev * current;
        break;
      default:
        return;
    }
    this.currentOperand = computation;
    this.operation = undefined;
    this.previousOperand = "";
  }

  getDisplayNumber(number) {
    const stringNumber = number.toString();
    const integerDigits = parseFloat(stringNumber.split(".")[0]);
    const decimalDigits = stringNumber.split(".")[1];

    let integerDisplay;
    if (isNaN(integerDigits)) {
      integerDisplay = "";
    } else {
      integerDisplay = integerDigits.toLocaleString("en", {
        maximumFractionDigits: 0,
      });
    }
    if (decimalDigits != null) {
        return `${integerDisplay}.${decimalDigits}`
    } else {
        return integerDisplay
    }
  }

  // updateDisplay() - updates the values in the output container
  updateDisplay() {
    this.currentOperandTextElement.innerText = 
        this.getDisplayNumber(this.currentOperand)
    if (this.operation != null) {
      this.previousOperandTextElement.innerText = 
      `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
    } else {
        this.previousOperandTextElement.innerText = ''
    }
  }
}

// constant variables numberButtons selects all of the data-number elements
const numberButtons = document.querySelectorAll("[data-number]");
// constant variables operationButtons selects all of the data-operation elements
const operationButtons = document.querySelectorAll("[data-operation]");
// constant variables allclearButton selects all of the data-all-clear elements
const allclearButton = document.querySelector("[data-all-clear]");
// constant variables equalsButton selects all of the data-equals elements
const equalsButton = document.querySelector("[data-equals]");
// constant variables deleteButton selects all of the data-delete elements
const deleteButton = document.querySelector("[data-delete]");
// constant variables previousOperandTextElement selects all of the data-previousOperand elements
const previousOperandTextElement = document.querySelector(
  "[data-previousOperand]"
);
// constant variables currentOperandTextElement select the of the data-currentOperand elements
const currentOperandTextElement = document.querySelector(
  "[data-currentOperand]"
);

// Calculator object for creating a new calculator
const calculator = new Calculator(
  previousOperandTextElement,
  currentOperandTextElement
);

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});

operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
  });
});

equalsButton.addEventListener("click", (button) => {
  calculator.compute();
  calculator.updateDisplay();
});

allclearButton.addEventListener("click", (button) => {
  calculator.clear();
  calculator.updateDisplay();
});

deleteButton.addEventListener("click", (button) => {
  calculator.delete();
  calculator.updateDisplay();
});