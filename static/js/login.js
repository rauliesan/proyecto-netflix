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
function iniciarSesion(){
    let usuario = document.getElementById("correo").value;
    let contrasenia = document.getElementById("contraseña").value;


    fetch('http://127.0.0.1:8000/iniciar_sesion/?nombre='+usuario +'&contrasenia='+contrasenia)
    .then(response => {
        if(response.ok){
            window.location.href = "home.html";
        } else{
            alert("Error: Usuario o Contraseña incorrecta.");
        }
    })
}