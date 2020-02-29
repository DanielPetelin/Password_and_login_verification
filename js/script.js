document.getElementById('yes').onclick = function() {
    var login = document.getElementById('login').value;
    var pass = document.getElementById('pass').value;
    var yourLogin = 'Егор';
    var yourPass = 66;

    if (pass == yourPass && login == yourLogin) {
        document.getElementById('out').innerHTML = 'Подтверждено!';
    };

    if (pass != yourPass || login != yourLogin) {
        document.getElementById('login').value = '';
        document.getElementById('pass').value = '';
        document.getElementById('out').innerHTML = 'Логин или пароль не верны! Введите ещё раз.';
    };
};