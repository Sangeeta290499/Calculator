var result = document.getElementById("result");

function display(number){
    result.value += number;
}

function calculator(){
    var final_number = result.value;
    var final_result = eval(final_number);
    result.value = final_result;
}

function clrcs(){
    result.value="";
}

function Del(){
    result.value = result.value.slice(0,-1);
}