function validarFormulario() {
    // Obtener los valores de los campos del formulario
    var nombres = document.getElementById("nombres").value;
    var apellidos = document.getElementById("apellidos").value;
    var direccion = document.getElementById("direccion").value;
    var correo = document.getElementById("correo").value;

    // Validar que todos los campos estén llenos
    if (nombres === "" || apellidos === "" || direccion === "" || correo === "") {
        alert("Por favor, complete todos los campos del formulario.");
        return false; // Evita que se envíe el formulario
    }

    // Validar el formato del correo electrónico usando una expresión regular
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(correo)) {
        alert("Por favor, ingrese un correo electrónico válido.");
        return false; // Evita que se envíe el formulario
    }

    // Si todos los campos son válidos, mostrar un mensaje de éxito
    alert("Los datos han sido enviados correctamente. ¡Gracias!");

    // Opcionalmente, puedes limpiar los campos del formulario después del envío
    document.getElementById("nombres").value = "";
    document.getElementById("apellidos").value = "";
    document.getElementById("direccion").value = "";
    document.getElementById("correo").value = "";

    return true; // Permite el envío del formulario
}
