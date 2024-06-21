let history = [];

function addToHistory(operation) {
    history.push(operation);
    updateHistory();
}

function updateHistory() {
    const historyList = document.getElementById('historyList');
    historyList.innerHTML = '';
    history.forEach(op => {
        const div = document.createElement('div');
        div.textContent = op;
        historyList.appendChild(div);
    });
}

function clearHistory() {
    history = [];
    updateHistory();
}

function setMode(mode) {
    document.querySelector('.standard-mode').style.display = 'none';
    document.querySelector('.scientific-mode').style.display = 'none';
    document.querySelector('.programmer-mode').style.display = 'none';

    document.querySelector(`.${mode}-mode`).style.display = 'grid';
}

// Calculator logic here

function calculate() {
    const resultField = document.getElementById('result');
    try {
        const result = eval(resultField.value); // Simple eval-based calculation
        addToHistory(resultField.value + ' = ' + result);
        resultField.value = result;
    } catch {
        resultField.value = 'Error';
    }
}

function appendCharacter(char) {
    const resultField = document.getElementById('result');
    resultField.value += char;
}

function clearResult() {
    const resultField = document.getElementById('result');
    resultField.value = '';
}

// Add event listeners for buttons
document.querySelectorAll('.buttons button').forEach(button => {
    button.addEventListener('click', () => {
        const action = button.getAttribute('data-action');
        if (action === 'calculate') {
            calculate();
        } else if (action === 'clear') {
            clearResult();
        } else {
            appendCharacter(action);
        }
    });
});
