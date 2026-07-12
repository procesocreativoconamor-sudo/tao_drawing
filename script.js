document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("intro-video");
    const introContainer = document.getElementById("intro-video-container");
    const carnetContainer = document.getElementById("carnet-container");

    // Aseguramos que el carnet inicie visible esperando los clicks si el video falla
    if (carnetContainer) {
        carnetContainer.classList.remove("oculto");
    }

    if (video) {
        video.play().catch(error => {
            console.log("Auto-play bloqueado por el navegador. Saltando intro.");
            eliminarIntro();
        });

        // Al acabar el video quitamos la capa intro
        video.addEventListener("ended", function () {
            eliminarIntro();
        });

        // Si el usuario hace clic sobre el video, también avanza al carnet
        introContainer.addEventListener("click", function() {
            eliminarIntro();
        });
    } else {
        eliminarIntro();
    }

    function eliminarIntro() {
        if (introContainer) {
            introContainer.classList.add("invisible");
            setTimeout(() => {
                introContainer.classList.add("oculto");
            }, 400);
        }
    }
});

/**
 * Función definitiva para ocultar el Carnet al pulsar en cualquier lado de este
 */
function entrarAlSitio() {
    const carnetContainer = document.getElementById("carnet-container");
    if (carnetContainer) {
        carnetContainer.classList.add("invisible");
        setTimeout(() => {
            carnetContainer.classList.add("oculto");
        }, 400);
    }
}

/**
 * Control del menú inferior interactivo
 */
function cambiarPestana(idPestana) {
    console.log("Cambiando a pestaña: " + idPestana);

    const todasLasPestanas = document.querySelectorAll('.pestaña-contenido');
    todasLasPestanas.forEach(pestana => {
        pestana.classList.add('oculto');
    });

    const pestañaActiva = document.getElementById('contenido-' + idPestana);
    if (pestañaActiva) {
        pestañaActiva.classList.remove('oculto');
    }

    const imagenMenu = document.querySelector('.imagen-barra-superior');
    if (imagenMenu) {
        if (idPestana === 'redes') {
            imagenMenu.src = 'images/menu-redes.png';
        } else if (idPestana === 'prox1') {
            imagenMenu.src = 'images/menu-prox1.png';
        } else if (idPestana === 'prox2') {
            imagenMenu.src = 'images/menu-prox2.png';
        } else if (idPestana === 'prox3') {
            imagenMenu.src = 'images/menu-prox3.png';
        }
    }
}

function buscar() {
    alert("¡Buscando en Tao Drawing!");
}
