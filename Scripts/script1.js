const aniLoop = document.querySelectorAll('.section__animation');
// Velocidad inicial
let speed = 10;

function animationLoop() {
    let width = aniLoop.offsetWidth;
    // Ajusta la velocidad al ancho del texto
    speed = width / 100;
    aniLoop.style.animationDuration = `${speed}s`;
}

window.addEventListener('resize', animationLoop);
// Llamamos a la funcion
animationLoop();