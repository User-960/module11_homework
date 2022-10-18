// Task 1
const iphoneModels = [3, "4s", 5, "5s", 6, "6 plus", 7, null, "7 plus", 8, "iphone X", 12, 13];

function countEvenOdd(elem) {
  let count = 0;
  for (let i = 0; i < elem.length; i++) {
    if (typeof elem[i] === 'number') {
      if (elem[i] % 2 === 0 && elem[i] !== 0) {
        console.log('Четное');
      }
      else if (elem[i] % 2 !== 0) {
        console.log('Нечетное');
      }
      else if (elem[i] === 0) {
        console.log('Это ноль!');
      }
    }
    else {
      console.log("Это не число!");
    }
  }
}
countEvenOdd(iphoneModels);

// Описание: в первом условном операторе if определяем какой элемент в массиве число, а какой нет. Когда узнали что является числом, то во втором операторе if эти найденные числа делим на чётные и нечётные. С помощью цикла for перебираем каждый элемент в массиве и пропускаем их через условные операторы.