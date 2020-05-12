
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
*/


let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
budget : money,
expenses : {},
optionalExpenses : {},
income : [],
timeData : time,
savings : false
};

for(let i = 0; i < 2; i++) { //Повторяем цикл два раза
  let question1 = prompt("Введите обязательную статью расходов в этом месяце");
  let question2 = prompt("Во сколько обойдется?");

  if((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
  && a != '' && b != '' && a.length < 50){ //Проверяем возвращает ли prompt строку и не пустая ли она
    console.log("done"); //Выводим сообщение в консоль
    appData.expenses[question1] = question2; //Добавляем ответ в наш объект
  }
};

appData.moneyPerDay = appData.budget / 30; //Добавляем новое свойство объекту (бюджет на день)
alert("Ежедневный бюджет : " + appData.moneyPerDay);

if(appData.moneyPerDay < 100){ //Если бюджет в день меньше 100
console.log('Минимальный уровень достатка');
} else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
console.log('Средний уровень достатка');
} else if(appData.moneyPerDay > 2000) {
console.log('Зажиточный Хуила');
} else {
console.log('Проверьте правильность введенных данных');
}

//Уровень достатка человека




/*
Разобраться с объектами
*/
