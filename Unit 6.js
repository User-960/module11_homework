// Task 4
const consNumbers = function (numOne, numTwo) {
  let current = numOne
  let timerId = setInterval(function () {
    console.log(current)
    if (current === numTwo) {
      clearInterval(timerId);
    }
    current++
  }, 1000);
};
consNumbers(5, 15)

// Описание: фукциональное выражение принимает 2 парамитра ввиде числа. В самой функции объявляем 2 переменные, одна из которых первый параметр, а вторая переменная это функция. Функция ввыводить число в консоль прибавляя единицу к каждому числу. Это операция продалжается пока число не будет равно второму параметру родительской функции. Интервал между ввода каждого числа в консоль - 1000 милисекунд.