function appendToDisplay(value) {
    document.getElementById('display').value += value; //faz com que o próximo digito inserido fique ao lado do que já estava no display
} 

function clearDisplay() {
    document.getElementById('display').value = ''; //
}

function calculate() {
    const display = document.getElementById('display').value;
    let result;

    // Tenta avaliar a expressão
    try {
        // Divide a expressão em operandos e operador
        const numbers = display.split(/[\+\-\*\/]/);
        const operators = display.replace(/[0-9.]/g, '').split('');

        if (numbers.length < 2) {
            result = 'Erro';
        } else {
            result = parseFloat(numbers[0]);

            for (let i = 0; i < operators.length; i++) {
                const nextNumber = parseFloat(numbers[i + 1]);

                if (operators[i] === '+') {
                    result += nextNumber;
                } else if (operators[i] === '-') {
                    result -= nextNumber;
                } else if (operators[i] === '*') {
                    result *= nextNumber;
                } else if (operators[i] === '/') {
                    if (nextNumber === 0) {
                        result = 'Erro';
                        break;
                    } else {
                        result /= nextNumber;
                    }
                } else {
                    result = 'Erro';
                    break;
                }
            }
        }
    } catch (error) {
        result = 'Erro';
    }

    document.getElementById('display').value = result;
}
