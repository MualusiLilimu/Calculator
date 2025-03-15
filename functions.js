function appendToOutput(value){
    document.getElementById('inputid').value += value; 
}

function calculate(){
    let expression = document.getElementById('inputid').value;

    try{
        let results = eval(expression);
        
        document.getElementById('inputid').value = results;
    }
    catch(error){
        document.getElementById('inputid').value = 'error';
    }

}
function clear(){
    document.getElementById('inputid').value = '';
}

document.querySelectorAll('.button').forEach(function(button) {
    button.addEventListener('click', function(){
        appendToOutput(this.getAttribute('data-value'));
    });
});

document.querySelectorAll('.buttons').forEach(buttons =>{
    buttons.addEventListener('click',function(){
        const value = this.getAttribute('data-value');

        if(value === '='){
            calculate();
        }
        else if(value === 'c'){
            clear();
        }
        else{
            appendToOutput(value);
        }
    });
});