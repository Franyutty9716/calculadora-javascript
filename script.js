function agregarNumero(numero) {
    document.getElementById('pantalla').value += numero;
}

function operacion(op) {
    const pantalla = document.getElementById('pantalla');
    pantalla.value = pantalla.value + ' ' + op + ' ';
}

function limpiar() {
    document.getElementById('pantalla').value = '';
}

function calcular() {
    const pantalla = document.getElementById('pantalla');
    const partes = pantalla.value.split(' ');
    const a = parseFloat(partes[0]);
    const operador = partes[1];
    const b = parseFloat(partes[2]);
    let resultado;

    if (operador === '+') {
        resultado = a + b;
    } else if (operador === '-') {
        resultado = a - b;
    } else if (operador === '*') {
        resultado = a * b;
        } else if (operador === '/') {
        if (b === 0) {
            pantalla.value = 'Error';
            return;
        }
        resultado = a / b;
    }
    pantalla.value = resultado;
}