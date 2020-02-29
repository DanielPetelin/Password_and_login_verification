document.getElementById('yes').onclick = function() {
    var login = document.getElementById('login').value;
    var pass = document.getElementById('pass').value;
    var yourLogin = 'Данил';
    var yourPass = 1234;

    if (pass == yourPass && login == yourLogin) {
        document.getElementById('out').innerHTML = 'Подтверждено!';
    };

    if (pass != yourPass || login != yourLogin) {
        document.getElementById('out').innerHTML = 'Логин или пароль не верны! Введите ещё раз.';
    };
};