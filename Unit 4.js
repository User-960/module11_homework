// Task 3
function calcSum(numOne, numTwo) {
  function sumNumbers() {
    return numOne + numTwo;
  };
  return sumNumbers()
};
console.log(calcSum(3, 7));

// Описание: функция calcSum как параметры принимает 2 числа. Эти 2 числа суммируются в локальной функции sumNumbers и локальная функция возвращает результат операции. За тем функция calcSum возразщает результат функции sumNumbers.