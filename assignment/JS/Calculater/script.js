function calculate() {
    var result = eval(document.getElementById('result').value);
    document.getElementById('result').value = result;
}
function clearResult() {
    document.getElementById('result').value = '';
}
function appendToResult(value) {
    document.getElementById('result').value += value;
}

