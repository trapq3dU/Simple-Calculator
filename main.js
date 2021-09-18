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
        let tempInput = "";
        let len = display.value.length;
        for(let i = 0; i < len-1; i++) {
            tempInput += display.value.charAt(i);
        }
        display.value = tempInput;
    }
    else {
        display.value += input;
    }
}