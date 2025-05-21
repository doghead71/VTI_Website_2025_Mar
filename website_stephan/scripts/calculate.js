
let text = "";


function press(value){
    text += value;
    flipScreen();
}

function clear(){
    text = "";
    flipScreen();
}

function flipScreen(){
    document.querySelector('input[name="display"]').value = text;
}

function calc(){
    text = eval(text);
    flipScreen();
}