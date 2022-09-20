
var saludo = document.querySelector('.clausure');

saludo.addEventListener('click', iniciar =() => {
    var name = "Yesenia"; 
    const saludar = () => { 
        alert ("Buenos dias, Ing." + name);  
    }
    saludar();    
});
    

const operacion = () => {
    var x = 1;
    var y = 2;
    const suma = () => {
        var resultado = x + y;
        console.log(resultado);
    }
    suma();
}

operacion();


const mostrarFuncion = () => {
    var boton = document.querySelector('.clausure');
    const obtenerValor = () => {
        var mensaje_aMostrar = 'Valor del boton: ' + boton.value;
        const mensaje = () => {
            alert(mostrarFuncion + `
            
            ${mensaje_aMostrar}
            
            `);
        }
        mensaje();
    }
    obtenerValor();
}

// mostrarFuncion();



