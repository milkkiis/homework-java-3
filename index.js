/* Теоретическая часть

Условные конструкции

if...else выбирает, какой код выполнить: if — если условие истинно, else — если ложно
switch выбирает действие по значению выражения. case задаёт вариант, break завершает выполнение switch, а default срабатывает, если совпадений нет

Логические операторы

Оператор	 Значение
&&           Оба условия должны выполняться 
\|\| 	     Достаточно выполнения хотя бы одного условия 
!	         Меняет логическое значение на противоположное 
*/

// 1. Определение четверти часа

const minutes = 10;

if (!Number.isInteger(minutes)) {
    // Срабатывает, если число не целое
  console.log("Ошибка: введите целое число");
} else if (minutes < 0 || minutes > 59) {
    // Срабатывает при вводе отрицательных чисел и больше 59
  console.log("Некорректное значение минут"); 

} else if (minutes <= 15) {
  console.log("Первая четверть");
} else if (minutes <= 30) {
  console.log("Вторая четверть");
} else if (minutes <= 45) {
  console.log("Третья четверть");
} else {
  console.log("Четвертая четверть");
}


// 2. Определение времени года

const month = 9;

if (!Number.isInteger(month)) {
    // Срабатывает, если число не целое
  console.log("Ошибка: номер месяца должен быть целым числом");
} else if (month < 1 || month > 12) {
    // Проверка на вхождение числа в диапазон

  console.log("Некорректный номер месяца");
} else if (month <= 3) {
  console.log("Зима");
} else if (month <= 6) {
  console.log("Весна");
} else if (month <= 9) {
  console.log("Лето");
} else {
  console.log("Осень");
}


// 3. Определение времени года через switch

const switchMonth = 2;

switch (true) {
    // В switch передается true.
    // Поэтому выполняется тот case, условие которого вернет true.
  case !Number.isInteger(switchMonth):
    console.log("Ошибка: номер месяца должен быть целым числом");
    break;

  case switchMonth >= 1 && switchMonth <= 3:
    console.log("Зима");
    break;

  case switchMonth >= 4 && switchMonth <= 6:
    console.log("Весна");
    break;

  case switchMonth >= 7 && switchMonth <= 9:
    console.log("Лето");
    break;

  case switchMonth >= 10 && switchMonth <= 12:
    console.log("Осень");
    break;
    // Выводится, если число не входит ни в один заданный диапазон
  default:
    console.log("Некорректный номер месяца");
}


// 4. Квадрат или куб числа

const number = 4;
    // Проверка на коректно введенное число по типу данных
if (typeof number !== "number" || Number.isNaN(number)) {
  console.log("Ошибка: введите корректное число");

    // Проверка остатка числа
} else if (number % 2 === 0) {
  console.log(`Квадрат числа ${number}: ${number ** 2}`);
} else {
  console.log(`Куб числа ${number}: ${number ** 3}`);
}


// 5. Интерактивный ввод через prompt в браузере

const enteredValue = prompt("Введите количество минут (от 0 до 59):");

if (enteredValue === null) {
  console.log("Ввод отменен");

// Проверка, не оставил ли пользователь поле пустым
// или не ввел ли только пробелы.
} else if (enteredValue.trim() === "") {
  console.log("Ошибка: значение не указано");

} else {
  // Преобразование введенной строки в число.
  const enteredMinutes = Number(enteredValue);

  if (Number.isNaN(enteredMinutes)) {
    console.log("Ошибка: введите корректное число");

  // Минуты должны быть целым числом в диапазоне от 0 до 59.
  } else if (
    !Number.isInteger(enteredMinutes) || enteredMinutes < 0 || enteredMinutes > 59
  ) {
    console.log("Некорректное значение минут");

  } else if (enteredMinutes <= 15) {
    console.log("Первая четверть");
  } else if (enteredMinutes <= 30) {
    console.log("Вторая четверть");
  } else if (enteredMinutes <= 45) {
    console.log("Третья четверть");
  } else {
    console.log("Четвертая четверть");
  }
}