// Función para cambiar el idioma
function cambiarIdioma() {
    var idiomaSeleccionado = document.getElementById("idioma").value;

    if (idiomaSeleccionado === "en") {
        // Redirige a la página en inglés (ajusta la URL según sea necesario)
        window.location.href = "sign-up_en.html";
    } else {
        // Redirige a la página en español (ajusta la URL según sea necesario)
        window.location.href = "sign-up_es.html";
    }
}

document.getElementById('formRegistrarUsuario').addEventListener('submit', registrarUsuario);
function registrarUsuario(event){
    let usuario = document.getElementById('usuario').value;
    let contrasenia = document.getElementById('contrasenia').value;

    event.preventDefault();

    fetch('http://127.0.0.1:8000/crear_usuario/?nombre='+usuario+'&contrasenia='+contrasenia, {
        method: "POST"
    })
    .then(response => {
        if(response.ok){
            alert('Usuario creado correctamente.');
            window.location.href = "login_es.html";
        } else{
            alert('Error en la creación de usuario.');
        }
    })
}