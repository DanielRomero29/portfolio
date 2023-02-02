const datos = {
    nombre : "",
    email : "",
    mensaje : ""
}

const formulario = document.querySelector(".formulario");
formulario.addEventListener('submit', function(evento){
    evento.preventDefault();

    //Validar Formulario

    //const {nombre, email, mensaje} = datos;
    datos.nombre = document.getElementById("nombre").value;
    datos.email = document.getElementById("email").value;
    datos.mensaje = document.getElementById("mensaje").value;
    
    if(datos.nombre === '' || datos.email === '' || datos.mensaje === ''){
        
        mostrarValidacion('Todos los campos son obligatorios', "error");
         return;//Corta ejecucion de codigo
    } 
    //Enviar formulario
    mostrarValidacion('Se ha enviado el mensaje con los datos');
})


function mostrarValidacion(mensaje, error=null){
    const mens = document.createElement("p");
    mens.textContent = mensaje;
    if(error){
        mens.classList.add("error");
    }
    else{
        mens.classList.add("enviado");
    }
    
    formulario.appendChild(mens);

    //Desaparezca despues de 5seg
    setTimeout(() =>{
        mens.remove();
    }, 5000);
}