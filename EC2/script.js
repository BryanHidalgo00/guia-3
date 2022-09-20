press=1;
decimalCount =1;

decimal.addEventListener('click', ()=>{
    if(decimalCount>1){
        decimal.value = "";
    }else {
        decimal.value = ".";
    }
    decimalCount++;
})

escribirNumero();

MC.addEventListener('click', ()=> {
    numAlmacenado1=0;
    numAlmacenado2=0;
    storage = null;
    msg = "Memoria borrada";
    message(msg);
    i=0;
})

MS.addEventListener('click', ()=> {
    storage=parseFloat(inputOpc.value);
    msg = "Número guardado";
   
    message(msg);  
    i=0;
})

MR.addEventListener('click', ()=> {
    if(storage==null){
        msg="No existe un guardado";
    }else {
        inputOpc.value=storage;
        msg = "Número recuperado";
    }
    message(msg);
    i=0;
})

MPLUS.addEventListener('click', ()=> {
    storage+=parseFloat(inputOpc.value);
})

CE.addEventListener('click', ()=>{
    alt.value = alt.value.slice(0, alt.value.lenght-1);
    numAlmacenado1=parseFloat(inputOpc.value);
    decimalCount=1;
    borrarTodo();
})

C.addEventListener('click', ()=>{
    numAlmacenado1=0;
    numAlmacenado2=0;
    memoryNumber=0;
    storage = null;
    decimalCount=1;
    alt.value = alt.value.slice(0, alt.value.lenght-1);
    borrarTodo();
    i=0;
})

suma.addEventListener('click', ()=>{
    if(inputOpc.value == "Syntax Error" ){
        error();
    }else {
        opcKey();
        memoryNumber = numAlmacenado1;
        signo2="+";
        validateKeyPress(signo2);
        i=0;
        opc = 'SUMA';
    }
})

resta.addEventListener('click', ()=>{
    if(inputOpc.value == "Syntax Error" ){
        error();
    }else {
        opcKey();
        memoryNumber = numAlmacenado1;
        signo2="-";
        validateKeyPress(signo2);
        i=0;
        opc = 'RESTA';
    }
})

multiplicacion.addEventListener('click', ()=>{
    if(inputOpc.value == "Syntax Error" ){
        error();
    }else {
        opcKey();
        memoryNumber = numAlmacenado1;
        signo2="x";
        validateKeyPress(signo2);
        i=0;
        opc = 'MULTIPLICACION';
    }
})

division.addEventListener('click', ()=>{
    if(inputOpc.value == "Syntax Error" ){
        error();
    }else {
        opcKey();
        memoryNumber = numAlmacenado1;
        signo2="/";
        validateKeyPress(signo2);
        i=0;
        opc = 'DIVISION';
    }
})

mod.addEventListener('click', ()=>{
    if(inputOpc.value == "Syntax Error" ){
        error();
    }else {
        opcKey();
        memoryNumber = numAlmacenado1;
        signo2="%";
        validateKeyPress(signo2);
        i=0;
        opc = 'MOD';
    }
})

cuadrado.addEventListener('click', ()=>{   
    if(inputOpc.value == "Syntax Error" ){
        error();
    }else {
        opcKey();
        opc = 'CUADRADO';
        i=0;
        signo2="\u00B2";
        validateKeyPress(signo2);
        retorno();
        memoryNumber = numAlmacenado1;
    }
})

raiz.addEventListener('click', ()=>{
    if(inputOpc.value == "Syntax Error" ){
        error();
    }else {
        opcKey();
        opc = 'RAIZ';
        i=0;
        signo2="sqrt(";
        validateKeyPress3(signo2);
        retorno();
        memoryNumber = numAlmacenado1;
    }
})

inversa.addEventListener('click', ()=>{
    if(inputOpc.value == "Syntax Error" ){
        error();
    }else {
        opcKey();
        opc = 'INVERSA';
        i=0;
        signo2="1/";
        validateKeyPress2(signo2);
        retorno();
        memoryNumber = numAlmacenado1;
    }
})

equals.addEventListener('click', ()=>{
    if(inputOpc.value=="" || inputOpc.value == "Syntax Error" ){
        error();
    }else {
        procedEquals();
    }
    decimalCount=1;
})