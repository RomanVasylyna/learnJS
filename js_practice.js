
/*
JS Конспект

Условия
if vs else if
else if = в противном случае (Если первое условие не сработало)
Если мы используем несколько if, то все они сработают.
Если мы используем if + else if, то только одно из условий сработает (второе не смотрим)

Тернарный оператор ? (Всмысле тройной, три условия)
Формула :
условие ? код(выполнится если условие верно) : код(который выполнится если условие не верно)
(num == 50) ? alert('Верно!') : alert('Мало');
Тернарных операторов может быть много :
2 > 1 ? (3 > 4 ? 'v1' : 'v2') : (4 > 2 ? 'v3' : 'v4');

Switch Case
break - отгораживаем одно условие от другого
Вместо num == 50 / case 50 :
switch(num) {
  case num < 49:
  alert('Мало');
  break;
  case num > 100:
  alert('Дохуя');
  break;
  case num > 80:
  alert('Все еще много');
  break;
  case 50:
  alert('Верно!');
  break;
  default:
  alert('Что-то пошло не так!');
  break;
}



Циклы JS/JS Loops:

1.While
let num = 50;
while (num < 55) { //Пока переменная будет меньше 55
  alert(num); //Выводим ее на экран
  num++; //Увеличиваем на единицу
}

2.Do While
let num = 50;
do { //Призыв к действию
alert(num); //Выводим переменную на экран
num++; //Увеличиваем ее
}
while(num < 55); //Условие идет в конце

3.For (Используется чаще всего)
for(let num = 50; num < 55; num++){
alert(num);
}

Break и Continue
Break - полностью прерывает цикл
if(num == 52){
break;
}

Continue - пропускает данный шаг (условие)
if(num == 52){
continue;
}

Функции JS
Имя функции должно содержать глагол + имя сущ.(над чем производится действие)
Например, showGreeting

1.Function Expression

function sayHi() { Пример
  alert( "Привет" );
}

sayHi(); - Вызов функции

2. Function Declaration

let sayHi = function(person) { Пример
  alert( "Привет, " + person );
};
 sayHi(); - Вызов функции

 3. Anonymous Functions
 Функция без имени

 button.addEventListener('click', function (event) { Пример
    // эта анонимная функция будет вызвана при клике
 }, false);

 Функция сначала ищет переменную внутри себя(локально), а если не находит, то
 обращается к глобальной

 4.Arrow Functions (Стрелочные функции) ES6

 let penis = (a) => {
 return a;
 }

 Если кода внутри мало, то можем опустить фигурные скобки
 Слово return опускаем
 let penis = (a,b) = > a+b;

 Не всегда допустимо использование стрелочной функции




*/


/*
Еще два варианта цикла
1. Цикл While
let i = 0;
while(i < 2) {
  let question1 = prompt("Введите обязательную статью расходов в этом месяце");
  let question2 = prompt("Во сколько обойдется?");

  if((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
  && a != '' && b != '' && a.length < 50){ //Проверяем возвращает ли prompt строку и не пустая ли она
    console.log("done"); //Выводим сообщение в консоль
    appData.expenses[question1] = question2; //Добавляем ответ в наш объект
  }
  i++;
}

2.Цикл Do While.
let i = 0;
do{
  let question1 = prompt("Введите обязательную статью расходов в этом месяце");
  let question2 = prompt("Во сколько обойдется?");

  if((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
  && a != '' && b != '' && a.length < 50){ //Проверяем возвращает ли prompt строку и не пустая ли она
    console.log("done"); //Выводим сообщение в консоль
    appData.expenses[question1] = question2; //Добавляем ответ в наш объект
  }
  i++;
}
while(i < 2);
*/

/*
//Два Вопроса
let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");

//Объект с бюджетом
let appData = {
budget : money,
expenses : {},
optionalExpenses : {},
income : [],
timeData : time,
savings : false
};

//Повторяем цикл два раза
for(let i = 0; i < 2; i++) {
//Каждый вопрос задаем по 2 раза
let a = prompt("Введите обязательную статью расходов в этом месяце");
let b = prompt("Во сколько обойдется?");
//Проверяем условие (Два раза)
if(typeof(a) === 'string' && typeof(a) != null && typeof(b) != null
&& a != '' && b != '' && a.length < 50){ //Проверяем возвращает ли prompt строку и не пустая ли она
  console.log("done"); //Выводим сообщение в консоль
  appData.expenses[b] = a; //Добавляем ответ в наш объект
}
};

//Добавляем новое свойство объекту (бюджет на день)
appData.moneyPerDay = parseInt(appData.budget) / 30; //Бюджет на месяц делим на 30
alert("Ежедневный бюджет : " + Math.round(appData.moneyPerDay)); //Выводим на экран

//Проверяем уровень достатка человека
if(appData.moneyPerDay < 100){
console.log('Минимальный уровень достатка');
} else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
console.log('Средний уровень достатка');
} else if(appData.moneyPerDay > 2000) {
console.log('Зажиточный Хуила');
} else {
console.log('Проверьте правильность введенных данных');
}

//Выводим в консоль наш объект
console.log(appData);
*/

let cameras = {
price : 600,
weight:2000,
myDes:function(){
  return `This cannon camera is of ${}$`
}
}

/*
1.Виды циклов (видео)
2.Статьи про функции (Петриченко)
3.Видосы по стрелочным функциям
*/
