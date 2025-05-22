// Funcionalidad de scroll horizontal suave para las filas de películas
document.querySelectorAll('.movies-container').forEach(container => {
    container.addEventListener('wheel', (e) => {
        if (e.deltaY !== 0) {
            e.preventDefault();
            container.scrollLeft += e.deltaY;
        }
    });
});

// Simulación de navegación al hacer clic en películas
document.querySelectorAll('.movie-item').forEach(item => {
    item.addEventListener('click', () => {
        const title = item.querySelector('h3').textContent;
        alert(`Reproduciendo: ${title}`);
    });
});

// Botones de reproducir
document.querySelector('.play-button').addEventListener('click', () => {
    alert('Reproduciendo Stranger Things...');
});

document.querySelector('.info-button').addEventListener('click', () => {
    alert('Mostrando más información sobre Stranger Things...');
});

// Funcionalidad adicional para navegación
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const section = e.target.textContent;
        alert(`Navegando a: ${section}`);
    });
});

// Efecto de desplazamiento suave al hacer scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(0, 0, 0, 0.9)';
    } else {
        nav.style.background = 'linear-gradient(to bottom, rgba(0,0,0,0.8), transparent)';
    }
});

// Funcionalidad para mostrar/ocultar información de películas en móviles
if (window.innerWidth <= 768) {
    document.querySelectorAll('.movie-item').forEach(item => {
        item.addEventListener('touchstart', () => {
            const movieInfo = item.querySelector('.movie-info');
            movieInfo.style.opacity = '1';
            movieInfo.style.transform = 'translateY(0)';
            
            setTimeout(() => {
                movieInfo.style.opacity = '0';
                movieInfo.style.transform = 'translateY(20px)';
            }, 3000);
        });
    });
}

// Precargar imágenes para mejor rendimiento
const preloadImages = () => {
    const images = document.querySelectorAll('img[src*="placeholder"]');
    images.forEach(img => {
        const newImg = new Image();
        newImg.src = img.src;
    });
};

// Ejecutar precarga cuando la página esté lista
document.addEventListener('DOMContentLoaded', preloadImages);