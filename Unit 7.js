// Task 5
const calcNum = (numOne, numTwo) => {
  let result = numOne ** numTwo;
  return result
};
const resCalcNum = calcNum(2, 3);
console.log(resCalcNum)

const resCalcNumB = calcNum(4, 5);
console.log(resCalcNumB)

const resCalcNumC = calcNum(7, 4);
console.log(resCalcNumC)

// Описание: в функциональном выражении используется стрелочная функция с двумя параметрами. В теле функции объявляется переменная result и присваивается значение возведения в степень параметра numOne в параметр numTwo. Затем возращается результат этого выражения. Этот результат функционального выражения присваивается переменной resCalcNum и выписывается в консоль.