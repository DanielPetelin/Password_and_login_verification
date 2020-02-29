document.getElementById('yes').onclick = function() {
    var pass = document.getElementById('pass').value;
    var yourPass = 1234;

    if (pass == yourPass) {
        document.getElementById('out').innerHTML = 'Подтверждено!';
    };

    if (pass != yourPass) {
        document.getElementById('out').innerHTML = 'Пороль не верен! Введите ещё раз.';
    }
};