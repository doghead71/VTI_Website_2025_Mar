
let text = "";


function press(value){
    text += value;
    flipScreen();
}

function clear(){
    document.querySelector('input[name="display"]').value = "";
}

function flipScreen(){
    document.querySelector('input[name="display"]').value = text;
}

function calc(){
    text = eval(text);
    flipScreen();
}