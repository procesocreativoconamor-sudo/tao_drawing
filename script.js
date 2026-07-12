document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("intro-video");
    const introContainer = document.getElementById("intro-video-container");
    const carnetContainer = document.getElementById("carnet-container");

    if (video) {
        video.play().catch(error => {
            console.log("La reproducción automática está bloqueada. Esperando click del usuario.");
        });

        // Cuando la animación del video termine, pasamos al Carnet .png
        video.addEventListener("ended", function () {
            if (introContainer) {
                introContainer.classList.add("desvanecer");
                setTimeout(() => {
                    introContainer.style.display = "none";
                    // Hacemos visible el carnet
                    if (carnetContainer) {
                        carnetContainer.classList.remove("oculto");
                    }
                }, 800); 
            }
        });
    }
});

/**
 * Función que quita el Carnet con una transición suave al pulsar el botón o la imagen
 */
function entrarAlSitio() {
    const carnetContainer = document.getElementById("carnet-container");
    if (carnetContainer) {
        carnetContainer.classList.add("desvanecer");
        setTimeout(() => {
            carnetContainer.style.display = "none";
        }, 800);
    }
}

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
