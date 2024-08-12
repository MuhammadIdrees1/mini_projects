function valueButton(e) {
    calculatorForm.screen.value += e.value;
}

function Clear() {
    calculatorForm.screen.value = null;
}

function calculate() {
    calculatorForm.screen.value = eval(calculatorForm.screen.value);
}

function del(params) {
    
    calculatorForm.screen.value = calculatorForm.screen.value.substr(0 , calculatorForm.screen.value.length -1)
}