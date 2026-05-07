const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event){

    event.preventDefault();

    const correo = document.getElementById("correo").value;
    const password = document.getElementById("password").value;

    // Validar correo vacío
    if(correo === ""){
        alert("El correo no puede estar vacío");
        return;
    }

    // Validar formato de correo
    if(!correo.includes("@")){
        alert("Ingrese un correo válido");
        return;
    }

    // Validar contraseña
    if(password.length < 8){
        alert("La contraseña debe tener mínimo 8 caracteres");
        return;
    }

    alert("Registro exitoso");

});