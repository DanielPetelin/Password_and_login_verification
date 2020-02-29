// В данном скрипте давайте запишим функцию при нажатии на кнопку
// Вы можете поиграть с переменными и записывать в них, что захотите
// только вы должны учесть, что в переменную yourLogin, можно вводить любые значения, а в
// yourPass, только численные!
// Всё остольное рассказано далее.

// Создаём функцию при нажатии на кнопку, проверки!
document.getElementById('yes').onclick = function() {
    // создадим переменную для нашего логина
    var login = document.getElementById('login').value;
    // создадим переменную для нашего пароля
    var pass = document.getElementById('pass').value;
    // создадим наш логин, чтобы было удобнее
    var yourLogin = 'Данил';
    // создадим переменную пароля, чтобы было удобнее
    var yourPass = 1234;

    // делаем проверку для пароля и логина
    if (pass == yourPass && login == yourLogin) {
        // выводим в инпут
        document.getElementById('out').innerHTML = 'Подтверждено!';
    };

    // содадим поверку для неверного пароля и логина
    if (pass != yourPass || login != yourLogin) {
        // очистим инпут с логином
        document.getElementById('login').value = '';
        // очистим инпут с паролём
        document.getElementById('pass').value = '';
        // выведем ответ.
        document.getElementById('out').innerHTML = 'Логин или пароль не верны! Введите ещё раз.';
    };
};

// Спасибо за внимание!