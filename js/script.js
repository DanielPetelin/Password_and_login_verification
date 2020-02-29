document.getElementById('yes').onclick = function() {
    var pass = document.getElementById('pass').value;

    if (pass == '1234') {
        document.getElementById('out').innerHTML = 'Подтверждено!';
    };

    if (pass != '1234') {
        document.getElementById('out').innerHTML = 'пороль не верен! Введите ещё раз.'
    }
};