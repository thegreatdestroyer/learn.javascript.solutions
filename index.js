//Объекты
//Задание 1
// let user = {};
// user.name = "John";
// user.surname = "Smith";
// user.name = "Pete";
// delete user.name;

//Задание 2
// function isEmpty(obj) {
//    for (let key in obj) {
//        return false;
//    }
//    return true;
// }

//Задание 3
//Можно, свойства внутри объекта можно менять даже если он объявлен через const

//Задание 4
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   }

//   let sum = salaries.John + salaries.Ann + salaries.Pete;

//   console.log(sum);

//   function countSum(obj) {
//     for (let key in obj) {
//       sum = obj.key + sum;
//       return sum;
//         }
//         sum = 0;
//         return sum;
//     }

// console.log(countSum(salaries));


//Задание 5
// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
//   };

//   function multiplyNumeric(obj) {
//         for (let key in obj) {
//             if (typeof(obj[key]) === 'number') {
//                 obj[key] = obj[key] * 2;
//             } else {
//                 obj[key];
//             }
//         }
//   }

//   multiplyNumeric(menu);

//   console.log(menu);


//Методы объекта, "this"
//Задание "Калькулятор"
// let calculator = {
//     read() {
//             this.a = prompt('Первое число?', 0),
//             this.b = prompt('Второе число?', 0)
//     },

//     sum() {
//         return this.a + this.b;
//     }, 

//     mul() {
//         return this.a * this.b;
//     }
//   };
  
//   calculator.read();
//   alert( calculator.sum() );
//   alert( calculator.mul() );


  //Глава про конструкторы
  //Калькулятор
// function Calculator() {
//     this.read = function () {
//         this.a = +prompt('Первое число', 0);
//         this.b = +prompt('Второе число', 0);
//     };

//     this.sum = function() {
//         return this.a + this.b;
//     }

//     this.mul = function() {
//         return this.a * this.b;
//     }

// }

//   let calculator = new Calculator();
//   calculator.read();

//   alert( "Sum=" + calculator.sum() );
//   alert( "Mul=" + calculator.mul() );



//Задача Accumulator 
// function Accumulator(startingValue) {
//     this.value = startingValue;
//     this.read = function () {
//         this.a = +prompt('Введите число', 0);
//         this.value = this.value + this.a;
//     }
// }

// let accumulator = new Accumulator(1); // начальное значение 1

// accumulator.read(); // прибавит ввод prompt к текущему значению
// accumulator.read(); // прибавит ввод prompt к текущему значению

// alert(accumulator.value)

// function removeChar(str){
//     let arr = str.split('');
//     const newarr = arr.slice(1, arr.length - 1).join('');
//     return newarr;
//   };

// console.log(removeChar('eloquent'));



// Типы данных
// Числа, задачи
// let a = +prompt('Введите первое число', 0);
// let b = +prompt('Введите второе число', 0);

// console.log(a + b);


// function readNumber() {
//     let num;
  
//     do {
//       num = prompt("Введите число", 0);
//     } while ( !isFinite(num) ); //бесконечный цикл до тех пор, пока не введут число, пустую строку или null
  
//     if (num === null || num === '') return null;
  
//     return +num;
//   }
  
//   alert(`Число: ${readNumber()}`);

// Функция, которая возвращает рандомное число в промежутке
// function random (min, max) {
//     return Math.floor(min + Math.random() * (max - min + 1));
// }

// alert( random(1, 5) );
// alert( random(1, 5) );
// alert( random(1, 5) );



//Строки
//Сделать первый символ заглавным
// function makeFirstCharCapital(str) {
//     str = str[0].toUpperCase() + str.slice(1);
//     console.log(str);
//     return str;
// }

// makeFirstCharCapital('строкасмаленькойбуквы');



//Проверка на спам
// function checkSpam(str) {
//     if (str.toLowerCase().includes('xxx') || str.toLowerCase().includes('viagra')) {

//     console.log(true);
//         return true;
//     }
    
//     console.log(false);
//     return false;
// }


// checkSpam('buy ViAgRA now') == true
// checkSpam('free xxxxx') == true
// checkSpam("innocent rabbit") == false


//усечение строки
// function truncate(str, maxlength) {
//     let newStr = str.slice(0, maxlength);
//     if (str.length <= maxlength) {
//         console.log(str);
//         return str;
//     } else {
//         let newStr = str.slice(0, maxlength - 1) + '...';
//         console.log(newStr);
//         return newStr;
//     }
// }


// truncate("Вот, что мне хотелось бы сказать на эту тему:", 20);

// truncate("Всем привет!", 20);


// //Выделить число
// function extractCurrencyValue(str) {
//     return +str.slice(1);
// }


// alert( extractCurrencyValue('$120') === 120 );


//Массивы
//Операции с массивами

// const styles = ['Джаз', 'Блюз'];

// styles.push('Рок-н-ролл');
// styles[Math.round ((styles.length - 1) / 2)] = 'Классика';
// alert(styles.shift());
// styles.unshift('Рэп', 'Рэгги');
// console.log(styles);

// //Сумма введённых чисел
// function sumInput() {
//     let numbers = [];
    
//     while (true) {
//     let value = prompt('Введите число', 0);
//     if (value === '' || value === null || !isFinite(value)) break;
//     numbers.push(+value);
//     }

//     let sum = 0;

//     for (let number of numbers) {
//         sum+= number;
//     }

//     console.log(sum);
//     return sum;

// }


// sumInput();


//Подмассив наибольшей суммы
//Не осилил сам, разобрать позже
// arr = [1, -2, 3, 4, -9, 6];

// function getMaxSubSum(arr) {
//     let maxSum = 0;
//     let partialSum = 0;
  
//     for (let item of arr) { // для каждого элемента массива
//       partialSum += item; // добавляем значение элемента к partialSum
//       maxSum = Math.max(maxSum, partialSum); // запоминаем максимум на данный момент
//       if (partialSum < 0) partialSum = 0; // ноль если отрицательное
//     }
  
//     return maxSum;
//   }
  
//   console.log( getMaxSubSum([-1, 2, 3, -9]) ); // 5
//   console.log( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
//   console.log( getMaxSubSum([-2, -1, 1, 2]) ); // 3
//   console.log( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100
//   console.log( getMaxSubSum([1, 2, 3]) ); // 6
//   console.log( getMaxSubSum([-1, -2, -3]) ); // 0



//Методы массивов
//Перевести строку в camelCase
// function camelize(str) {
//     const newStr = str.split('-');
//     const camelized = newStr.map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)).join('');

//     return camelized;
// }


// console.log(camelize('my-new-stroke-going-to-be-camelized'));


//Фильтрация по диапазону
// function filterRange(arr, a, b) {
//     return arr.filter((element) => {
//         if (element >= a && element <= b) {
//             return element;
//         }
//     });
// }

// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// console.log(filtered); 

// console.log(arr); 


//Фильтрация на месте
// function filterRangeInPlace(arr, a, b) {
//     for (let i = 0; i < arr.length; i++) {
//         let value = arr[i];

//         if (value < a || val > b) {
//             arr.splice(i, 1);
//             i--;
//         }
//     }
// }

// let arr = [5, 3, 8, 9, 10, 2, 4, 9, 8, 7, 2, 2, 3, 1];

// filterRangeInPlace(arr, 1, 4); 

// console.log( arr ); 


//Сортировка в порядке убывания
// let arr = [5, 2, 1, 100, 2, -12, -3, 111, -10, 8];
// arr.sort((a, b) => b - a);

// console.log(arr);


//Скопировать и отсортировать массив
// function copySorted(arr) {
//     let newArr = arr.slice();
//     return newArr.sort();
// }



// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr);

// console.log( sorted ); // CSS, HTML, JavaScript
// console.log( arr ); // HTML, JavaScript, CSS (без изменений



//Создать расширяемый калькулятор
// function Calculator() {
//     this.calculate = function(str) {
//         // пока непонятно
//     }
// }



//Трансформация в массив имён 
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [ vasya, petya, masha ];

// let names = users.map((user) => {
//     return user.name;
// });

// console.log(names);


//Трансформация в объекты
// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [ vasya, petya, masha ];

// let usersMapped = users.map(user =>  ({fullName: `${user.name} ${user.surname}`, id: user.id}));

// console.log( usersMapped[0].id ) ;
// console.log( usersMapped[0].fullName ) ;


//Отсортировать пользователей по возрасту
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let arr = [ vasya, petya, masha ];

// function sortByAge(arr) {
//     return arr.sort((a,b) => a.age > b.age ? 1 : -1);
// }

// console.log(arr);
// console.log(sortByAge(arr));


//Перемешайте массив
// function shuffle(array) {
//     на подумать
// }


// Получить средний возраст
// function getAverageAge(users) {
//     return users.reduce((average, user) => average + user.age, 0) / users.length;
// }


// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };

// let arr = [ vasya, petya, masha ];



// console.log( getAverageAge(arr) );




//Оставить уникальные элементы массива
// function unique(arr) {
//     const newString = [];
//     arr.forEach((string) => {
//         if (!newString.includes(string)) {
//             newString.push(string);
//         }
//     });
//     return newString;
//   }
  
//   let strings = ["кришна", "кришна", "харе", "харе",
//     "харе", "харе", "кришна", "кришна", ":-O"
//   ];
  
//   console.log( unique(strings) ); // кришна, харе, :-O

// function unique(arr) {
//     const newString = {};
//     arr.forEach(string => {
//         if (!newString[string]) {
//             newString[string] = true;
//         }
//     });
//     return Object.keys(newString);
//   }
  
//   let strings = ["кришна", "кришна", "харе", "харе",
//     "харе", "харе", "кришна", "кришна", ":-O"
//   ];
  
//   console.log( unique(strings) ); // кришна, харе, :-O

// function unique(arr) {
//     const newString = {};
//     return arr.filter(string => {
//         if (!newString[string]) {
//             newString[string] = true;
//             return true;
//         } 
//         return false;
//     });
//   }
  
//   let strings = ["кришна", "кришна", "харе", "харе",
//     "харе", "харе", "кришна", "кришна", ":-O"
//   ];
  
//   console.log( unique(strings) ); // кришна, харе, :-O




//MAP и SET
//Фильтрация уникальных элементов массива
// function unique(arr) {
//     return Array.from(new Set(arr));
//   }
  
//   let values = ["Hare", "Krishna", "Hare", "Krishna",
//     "Krishna", "Krishna", "Hare", "Hare", ":-O"
//   ];
  
//   console.log( unique(values) ); // Hare,Krishna,:-O



//Отфильтруйте анаграммы
// function aclean(arr) {
//     let map = new Map();
  
//     for (let word of arr) {
//       // разбиваем слово на буквы, сортируем и объединяем снова в строку
//       let sorted = word.toLowerCase().split("").sort().join(""); // (*)
//       map.set(sorted, word);
//     }
  
//     return Array.from(map.values());
//   }
  
//   let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
  
//   console.log( aclean(arr) );

// const items = document.querySelectorAll('.item');

// items.forEach((item) => {
//     item.addEventListener('click', (event) => {
//         console.log(event.target.innerHTML);
//     });
// });

// let one = getNodeList[0];
// one.onclick = function() {
//     console.log(one.innerHTML);
// }

// let two = getNodeList[1];
// two.onclick = function() {
//     console.log(two.innerHTML);
// }

// let three = getNodeList[2];
// three.onclick = function() {
//     console.log(three.innerHTML);
// }

//можно было сделать через document.querySelector('.item:nth-child(2))



//Делегирование(ивент на родителя, но прослушивание детей)
// const items = document.querySelector('.list');
 
// items.addEventListener('click', (event) => {
//         console.log(event.target.innerHTML);
//     });


// const item = document.getElementById('item');
// const link = document.getElementById('link');


// item.addEventListener('click', (event) => {
//     console.log('item');
// });

// link.addEventListener('click', (event) => {
//     event.stopPropagation();
//     console.log('link');
// });

// localStorage.setItem('privet', 'mir');
// const localeItem = localStorage.getItem('privet');
// console.log(localeItem);

// const input = document.querySelector('input');
// input.value = localStorage.getItem('inputKey');
// input.addEventListener('change', (event) => {
//     localStorage.setItem('inputKey', event.target.value);
// });
