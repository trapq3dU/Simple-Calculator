const display = document.getElementById("display");

function calculate(btnValue) {
    
    const input = btnValue;

    if (input === '=') {

        if (display.value !== '') {
            
            display.value = eval(display.value);
        }
    } 
    else if (input === 'C') {

        display.value = '';
    }
    else {
        display.value += input;
    }
}