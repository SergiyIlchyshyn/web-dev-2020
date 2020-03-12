function task01() {
    let a = document.getElementById('a-item').value | 0;
    let b = document.getElementById('b-item').value | 0;
    let res = document.getElementById('res01');
    let sum = a + b;
    let riz = a - b;
    let dob = a * b;
    res.innerHTML = "Результат:" + "<br>" + "Сума = " + sum + "<br>" + "Різниця = " + riz + "<br>" + "Добуток = " + dob;
}

function task02() {
    let x = document.getElementById('x-item').value | 0;
    let y = document.getElementById('y-item').value | 0;
    let res = document.getElementById('res02');
    let dob = (Math.abs(x) - Math.abs(y)) / (1 + Math.abs(x * y));
    res.innerHTML = "Результат обчислення:" + dob;
}

function task03() {
    let x = document.getElementById('c-item') | 0;
    let res = document.getElementById('res03');
    let v = x * x * x;
    let s = 6 * x * x;
    res.innerHTML = "Об'єм куба = " + v + "<br>" + "Площа = " + s;
}


function task04() {
    let n = document.getElementById('n-item').value | 0;
    let m = document.getElementById('m-item').value | 0;
    let res = document.getElementById('res04');
    let avr = (n + m) / 2;

    res.innerHTML = "Середнє арифметичне = " + avr + "<br>";
}