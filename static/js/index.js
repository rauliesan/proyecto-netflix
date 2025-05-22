function iniciarSesion() {
    window.location.href = "template/login_es.html";
}

function registrarse(){
    window.location.href = "template/sign-up_es.html";
}

// JavaScript para los FAQ
function toggleFAQ(element) {
    const answer = element.nextElementSibling;
    const icon = element.querySelector('i');

    if (answer.classList.contains('show')) {
        answer.classList.remove('show');
        icon.className = 'fas fa-plus';
    } else {
        answer.classList.add('show');
        icon.className = 'fas fa-minus';
    }
}