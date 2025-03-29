// Función para cambiar el idioma
function cambiarIdioma() {
    var idiomaSeleccionado = document.getElementById("idioma").value;

    if (idiomaSeleccionado === "en") {
        // Redirige a la página en inglés (ajusta la URL según sea necesario)
        window.location.href = "pagina_en_ingles.html";
    } else {
        // Redirige a la página en español (ajusta la URL según sea necesario)
        window.location.href = "pagina_en_espanol.html";
    }
}

// Función para manejar el inicio de sesión
function iniciarSesion(){
    var usuario = document.getElementById("correo").value;
    var contraseña = document.getElementById("contraseña").value;

    if (usuario === "usuario" && contraseña === "usuario") {
        alert("Inicio de sesión exitoso. Bienvenido, usuario.");
        // Redirige a la página principal después de un inicio de sesión exitoso (ajustar la URL)
        window.location.href = "index.html";
    } else {
        alert("Usuario o contraseña incorrectos.");
    }
}