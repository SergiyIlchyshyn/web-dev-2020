function task01() {
    var a = document.getElementById('a-item').value | 0;
    var b = document.getElementById('b-item').value | 0;
    var res = document.getElementById('res');
    var sum = a + b;
    var riz = a - b;
    var dob = a * b;
    res.innerHTML = "Результат:" + "<br>" + "Сума = " + sum + "<br>" + "Різниця = " + riz + "<br>" + "Добуток = " + dob;
    // alert("Результат:" + "<br>" + "Сума = " + sum + "<br>" + "Різниця = " + riz + "<br>" + "Добуток = " + dob);
}