function func() {
  document.getElementById("result").innerHTML = result;
  var result;

  var num1 = Number(document.getElementById("num1").value);
  var num2 = Number(document.getElementById("num2").value);

  switch (op) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
  }
}








// console.log("Hi");
// const arr = [1, 2, 3, 27, 65, 54];

// function sum(items) {
//   let s = 0;

//   for (let i = 0; i < items.lenght; i += 1) {
//     s += items[i];
//   }
//   return s;
// }

// function max(items) {
//   let m = 0;

//   for (let i = 0; i < items.lenght; i += 1) {
//     if (items[i] > m) {
//       m = items[i];
//     }
//   }
//   return m;
// }

// function min(items) {
//   let mm = items[0];

//   for (let i = 0; i < items.lenght; i += 1) {
//     if (items[i] < mm) {
//       mm = items[i];
//     }
//   }
//   return mm;
// }

// console.log(avg(arr));
// console.log(sum(arr));
// console.log(min(arr));
// console.log(max(arr));
