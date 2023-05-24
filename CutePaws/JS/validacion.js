var formulario = document.getElementsByName('formulario')[0],
elementos = formulario.elements, // Elementos del form, no lo usamos en este script.
boton = document.getElementById('enviar') 

// --------------------------------------------------------
// Validamos Nombre
// --------------------------------------------------------
var validarF = function (e) {
    let validar = true;  
    if (formulario.nombre.value == 0) { 
        document.querySelector("#textoValidacion1").innerHTML = "Olvidaste poner tu nombre!"
        validar = false
        e.preventDefault()
    }
    if (formulario.nombreMascota.value == 0) { 
        document.querySelector("#textoValidacion2").innerHTML = "Olvidaste poner el nombre de tu mascota!"
        e.preventDefault()
        validar = false
    }
    if (formulario.mail.value == 0) { 
        document.querySelector("#textoValidacion3").innerHTML = "Olvidaste escribir tu mail!"
        e.preventDefault()
        validar = false
    }
    if(validar == true){
        alert("Muchas gracias por enviar el formulario")
        
    }
}
var validar = function (e) {  // "e" es el evento recibido del form 
    let ar = document.querySelectorAll(".textoValidacion");
    for(let i = 0; i < ar.length; i++){
        ar[i].innerHTML = ""
    }
    validarF(e) 
}

// --------------------------------------------------------
// Espera que se presione "enviar" y llama a "validar"
// submit es un evento DEL FORM, no del botón!
formulario.addEventListener("submit", validar)