function insert(num){
    const inputvalue = document.form1.inputvalue.value;
    
    document.form1.inputvalue.value = inputvalue + num;
}

function equal(){
    let total = document.form1.inputvalue.value;
    
    if(total){
        total = eval(total);
        //update input value
        document.form1.inputvalue.value = total;
        console.log(total);
    }
}

function backspace(){
    let inputvalue = document.form1.inputvalue.value;
    
    inputvalue = inputvalue.slice(0, -1);
    
    document.form1.inputvalue.value = inputvalue;
}