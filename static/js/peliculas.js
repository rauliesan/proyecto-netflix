document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('hero-video');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const volumeBtn = document.getElementById('volume-btn');
    // const volumeSlider = document.getElementById('volume-slider'); // Descomentar si lo usas
    const fullscreenBtn = document.getElementById('fullscreen-btn');
    const playbackSpeedBtn = document.getElementById('playback-speed-btn');
    const captionsBtn = document.getElementById('captions-btn'); // Funcionalidad no implementada

    const emailForm = document.querySelector('.email-form');

    // Play/Pause
    if (playPauseBtn && video) {
        playPauseBtn.addEventListener('click', () => {
            if (video.paused || video.ended) {
                video.play();
                playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
            } else {
                video.pause();
                playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
            }
        });

        video.addEventListener('play', () => {
            playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
        });
        video.addEventListener('pause', () => {
            playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
        });
    }

    // Volume (Mute/Unmute)
    if (volumeBtn && video) {
        volumeBtn.addEventListener('click', () => {
            video.muted = !video.muted;
            volumeBtn.innerHTML = video.muted ? '<i class="fas fa-volume-mute"></i>' : '<i class="fas fa-volume-up"></i>';
        });
    }

    // Fullscreen
    if (fullscreenBtn && video.parentElement) { // Usar el contenedor del video para fullscreen
        const videoContainer = video.parentElement; // .video-background-container
        fullscreenBtn.addEventListener('click', () => {
            if (!document.fullscreenElement) {
                if (videoContainer.requestFullscreen) {
                    videoContainer.requestFullscreen();
                } else if (videoContainer.mozRequestFullScreen) { /* Firefox */
                    videoContainer.mozRequestFullScreen();
                } else if (videoContainer.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
                    videoContainer.webkitRequestFullscreen();
                } else if (videoContainer.msRequestFullscreen) { /* IE/Edge */
                    videoContainer.msRequestFullscreen();
                }
                fullscreenBtn.innerHTML = '<i class="fas fa-compress"></i>';
            } else {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                }
                fullscreenBtn.innerHTML = '<i class="fas fa-expand"></i>';
            }
        });

        document.addEventListener('fullscreenchange', () => {
            if (!document.fullscreenElement) {
                fullscreenBtn.innerHTML = '<i class="fas fa-expand"></i>';
            }
        });
    }
    
    // Playback Speed (simple toggle, podrías hacerlo más complejo)
    let currentSpeed = 1.0;
    const speeds = [1.0, 1.25, 1.5, 2.0, 0.75]; // Ejemplo de velocidades
    let speedIndex = 0;

    if (playbackSpeedBtn && video) {
        playbackSpeedBtn.addEventListener('click', () => {
            speedIndex = (speedIndex + 1) % speeds.length;
            currentSpeed = speeds[speedIndex];
            video.playbackRate = currentSpeed;
            playbackSpeedBtn.textContent = `${currentSpeed}x`;
        });
        // Inicializar texto del botón
        playbackSpeedBtn.textContent = `${video.playbackRate}x`;
    }


    // Email Form Submission (simulado)
    if (emailForm) {
        emailForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = emailForm.querySelector('input[type="email"]').value;
            if (email) {
                alert(`Gracias por tu interés. Correo registrado (simulado): ${email}`);
                emailForm.reset();
            } else {
                alert('Por favor, introduce una dirección de correo válida.');
            }
        });
    }

    // Iniciar sesión botón (simulado)
    const loginButton = document.querySelector('.login-button');
    if (loginButton) {
        loginButton.addEventListener('click', () => {
            alert('Redirigiendo a Iniciar Sesión (simulado)');
        });
    }
});