/*
https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript
*/


/*
https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/javascript
*/


//Пункт 2
let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");

//Пункт 4
let question1 = prompt("Введите обязательную статью расходов в этом месяце");
let question2 = prompt("Во сколько обойдется?");

//Пункт 3
let appData = {
budget : money, timeData : time, expenses : {question1 : question2}, optionalExpenses : {}, income : [], savings : false
};




/*
appData.forEach(function(key){
alert(key.budget);
})
*/



/*
1.Проверить чтоб строка содержала четыре числа от 0 до 255 через точку
2.Число может быть 0, но не 09.
function isValidIP(str) {
let test = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/g.test(str);
return test;
}

alert(isValidIP('45.190.20.900.'));
*/


/*
else if - если первое условие не выполнено, то переходим к следующему
*/

/*
Информация :
Git - version control system
Разделяем индексацию и коммит :
git add a.html - индексация
git add b.html
git commit -m "Changes for a & b" - коммит

git add c.html
git commit -m "Unrelated change for C"

-m - от слова message делает комментарий в командной строке
Если вы опустите метку -m из командной строки, git перенесет вас
в редактор по вашему выбору.

git работает с изменениями, а не файлами.
Git фокусируется на изменениях в файле, а не самом файле. Когда вы осуществляете команду
git add file, вы не говорите git добавить файл в репозиторий. Скорее вы говорите,
что git надо отметить текущее состояние файла, коммит которого будет произведен позже.

git commit - создаем новую (отредактированную) версию файла
Changes to be commited - что будет в следующем коммите

3 состояния файлов :
1. Файл просто есть (никак не связан с гитом).
2. Файл индексируется (система следит за его изменениями). Команда git add file.html
3. Изменения сохраняются (коммитятся) в системе. Комманда git commit -m "Commit"

Комманды :
Git комманды консоли
git init - добавляем файл в репозиторий

Кто вносил изменения
git config --global/local user.name "Имя"
git config --global/local user.email "Имейл"

git add file.html - добавляем файл в репозиторий
git add -A - добавляем все файлы в репозиторий
git commit -m "Commit" - делаем коммит
git commit -a -m "Commit" - делаем коммит всем файлам

git status - проверяем состояние репозитория
git log - отслеживаем все изменения
git log --pretty=oneline - в одну строку
git reset file.html- отменить изменения в файле

echo >> README.md - создаем readme файл (текстовый)
git log --help - откроется мануал по гиту (работает даже без инета)

git pull - подтягивает изменения с гитхаба

Log :
git log --pretty=oneline --max-count=2
git log --pretty=oneline --since='5 minutes ago'
git log --pretty=oneline --until='5 minutes ago'
git log --pretty=oneline --author="your name"
git log --pretty=oneline --all
git log --pretty=format:"%h %ad | %s%d [%an]" --graph --date=short
(https://githowto.com/ru/history)

clear - очищаем консоль

Работа с gitHub
Перемещаем данные с локального диска на удаленный (gitHub)
git remote add origin(псевдоним репозитория, может быть любым) https://github.com/RomanVasylyna/js_practice.git
git push -u origin(псевдоним репозитория, может быть любым) master(главная ветка)

Нажимаем Clone or Download
Два варианта на выбор :
- Скачиваем Zip архив
- Копируем ссылку, открываем консоль git Bash, пишем команду git clone https://github.com/RomanVasylyna/learnGit.git название папки

Если мы хотим чтобы изменения подтянулись в папку, которая уже связана с gitHub,
нужно использовать команду git pull.
Если вылезет ошибка, то - git reset --hard

Порядок действий
git pull => git push

Git Ignore
Это файлы нужные для проекта, но которые не обязательно пушить в гитхаб
Они игнорируются при комманде git push

Создаем Git Ignore
Создаем текстовый документ с расширением .gitignore

Комманды для Git Ignore
# - комментарий
имя папки/ - игнориуем данную папку
имя папки/*.txt - в данной папке игнорируем все файлы с данным расширением

Git Kraken
Программа для проверки коммитов

*/
