// Función para cambiar el idioma
function cambiarIdioma() {
    var idiomaSeleccionado = document.getElementById("idioma").value;

    if (idiomaSeleccionado === "en") {
        // Redirige a la página en inglés (ajusta la URL según sea necesario)
        window.location.href = "login_en.html";
    } else {
        // Redirige a la página en español (ajusta la URL según sea necesario)
        window.location.href = "login_es.html";
    }
}

// Función para manejar el inicio de sesión
document.getElementById('formInicioSesion').addEventListener('submit', iniciarSesion);
function iniciarSesion(event){
    let usuario = document.getElementById("usuario").value;
    let contrasenia = document.getElementById("contrasenia").value;
    
    event.preventDefault();

    fetch('http://127.0.0.1:8000/iniciar_sesion/?nombre='+usuario +'&contrasenia='+contrasenia)
    .then(response => {
        if(response.ok){
            document.getElementById('usuario').value = "";
            document.getElementById('contrasenia').value = "";
            window.location.href = "home.html";
        } else{
            alert("Error: Usuario o Contraseña incorrecta.");
        }
    })
    .catch(error => {
        console.error("No se pudo conectar con la base de datos:", error);
        // Credenciales de respaldo
        if (usuario === "usuario" && contrasenia === "usuario") {
            alert("Conexión con la base de datos fallida, pero acceso de respaldo concedido.");
            document.getElementById('usuario').value = "";
            document.getElementById('contrasenia').value = "";
            window.location.href = "home.html";
        } else {
            alert("No se pudo conectar con la base de datos y las credenciales de respaldo no coinciden.");
        }
    });
}