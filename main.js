const display = document.getElementById("display");

function calculate(btnValue) {
    
    const input = btnValue;

    if (input === '=') {

        if (display.value !== '') {
            
            display.value = eval(display.value);
        }
    } 
    else if (input === 'clear') {

        display.value = '';
    }
    else if(input === 'del') {
        let len = display.value.length;        
        let tempInput = display.value.substr(0, len-1);
        display.value = tempInput;
    }
    else {
        display.value += input;
    }
}
