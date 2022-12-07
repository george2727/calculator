// const output = document.querySelector('output')
// let score = 0;
// const maxNumber = Math.pow(10, 5);
let score = document.querySelector(".score");
// let buttons = Array.from(document.getElementsByClassName('button'));
let num1 = "";
let num2 = "";
let op = "";
const scoreEl = document.querySelector(".score");
const btns = document.querySelectorAll(".btn");
const percentages = "%";
const percentagesEl = document.querySelector(".percentages");
const ce = "CE";
const ceEl = document.querySelector(".ce");
const c = "C";
const cEl = document.querySelector(".c");
const ret = "⏎";
const retEl = document.querySelector(".ret");
const seven = "7";
const sevenEl = document.querySelector(".seven");
const eight = "8";
const eightEl = document.querySelector(".eight");
const nine = "9";
const nineEl = document.querySelector(".nine");
const multiply = "×";
const multiplyEl = document.querySelector(".multiply");
const four = "4";
const fourEl = document.querySelector(".four");
const five = "5";
const fiveEl = document.querySelector(".five");
const six = "6";
const sixEl = document.querySelector(".six");
const minus = "-";
const minusEl = document.querySelector(".minus");
const one = "1";
const oneEl = document.querySelector(".one");
const two = "2";
const twoEl = document.querySelector(".two");
const three = "3";
const threeEl = document.querySelector(".three");
const plus = "+";
const plusEl = document.querySelector(".plus");
const divide = "/";
const divideEl = document.querySelector(".divide");
const zero = "0";
const zeroEl = document.querySelector(".zero");
const point = ".";
const pointEl = document.querySelector(".point");
const equally = "=";
const equallyEl = document.querySelector(".equally");
const digits = [zero, one, two, three, four, five, six, seven, eight, nine];
const operations = [multiply, plus, minus, divide];
const resets = [ce, c];
const equalls = [equally];
const returns = [ret];
let stage = 0;

const maxNumber = 5;

function renderPercentages() {
  percentagesEl.textContent = percentages;
}

renderPercentages();

function renderCE() {
  ceEl.textContent = ce;
}

renderCE();

function renderC() {
  cEl.textContent = c;
}

renderC();

function renderRet() {
  retEl.textContent = ret;
}

renderRet();

function renderSeven() {
  sevenEl.textContent = seven;
}

renderSeven();

function renderEight() {
  eightEl.textContent = eight;
}

renderEight();

function renderNine() {
  nineEl.textContent = nine;
}

renderNine();

function renderMultiply() {
  multiplyEl.textContent = multiply;
}

renderMultiply();

function renderFour() {
  fourEl.textContent = four;
}

renderFour();

function renderFive() {
  fiveEl.textContent = five;
}

renderFive();

function renderSix() {
  sixEl.textContent = six;
}

renderSix();

function renderOne() {
  oneEl.textContent = one;
}

renderOne();

function renderTwo() {
  twoEl.textContent = two;
}

renderTwo();

function renderThree() {
  threeEl.textContent = three;
}

renderThree();

function renderPlus() {
  plusEl.textContent = plus;
}

renderPlus();

function renderDivide() {
  divideEl.textContent = divide;
}

renderDivide();

function renderZero() {
  zeroEl.textContent = zero;
}

renderZero();

function renderPoint() {
  pointEl.textContent = point;
}

renderPoint();

function renderEqually() {
  equallyEl.textContent = equally;
}

renderEqually();

function renderMinus() {
  minusEl.textContent = minus;
}

renderMinus();

function calc(num1, num2, op) {
  let score = 0;
  switch (op) {
    case "+":
      score = num1 + num2;
      break;
    case "-":
      score = num1 - num2;
      break;
    case "×":
      score = num1 * num2;
      break;
    case "/":
      score = num1 / num2;
      break;
  }
  return score;
}

function click(event) {
  console.log(event);
  const text = event.target.textContent;
  const isDigit = digits.includes(text);
  const isOperation = operations.includes(text);
  const isReset = resets.includes(text);
  const isEquall = equalls.includes(text);
  const isReturn = returns.includes(text);
  if (!isDigit && !isOperation && !isReset && !isEquall && !isReturn) {
    alert("неизвестная кнопка");
    return;
  }

  // определяем число, действие или равно.
  // стадии
  if (isReset) {
    stage = 0;
    num1 = "";
    num2 = "";
    op = "";
  } else if (stage === 0) {
    // 0. ничего не введено
    // -> ввод цифры
    if (isDigit) {
      stage = 1;
      num1 = text;
    }
  } else if (stage === 1) {
    // 1. ввод цифр
    // -> ввод действия
    if (isDigit) {
      if (num1.length >= maxNumber) {
        return;
      }
      num1 += text;
    } else if (isOperation) { 
      op = text;
      stage = 2;
    }
    else if (isReturn) {
      num1 = removeLast(num1);
      if (!num1) {
        stage = 0;
      }
    }
  } else if (stage === 2) {
    // 2. ввод действия
    // -> ввод цифры
    if (isOperation) {
      op = text;
    } else if (isDigit) {
      stage = 3;
      num2 = text;
    }
    else if (isReturn) {
      op = "";
      stage = 1;
    }
  } else if (stage === 3) {
    // 3. ввод цифр
    // -> нажатие равно
    if (isDigit) {
      if (num2.length >= maxNumber) {
        return;
      }
      num2 += text;
    } else if (isEquall) {
      stage = 4;
    }
    else if (isReturn) {
      num2 = removeLast(num2);
      if (!num2) {
        stage = 2;
      }
    }
  }
  // 4. результат
  // -> нажатие С
  // 0.
  scoreEl.textContent = num1 + op + num2 || "0";
  if (stage === 4) {
    scoreEl.textContent += "=";
    scoreEl.textContent += calc(+num1, +num2, op);
  }
}

btns.forEach(function (btn) {
  btn.onclick = click;
});

function removeLast(value) {
  return value.substring(0, value.length - 1);
}


