document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("intro-video");
    const introContainer = document.getElementById("intro-video-container");
    const carnetContainer = document.getElementById("carnet-container");

    if (video) {
        video.play().catch(error => {
            console.log("La reproducción automática está bloqueada. Esperando interacción o forzando salto.");
            eliminarIntroYMostrarCarnet();
        });

        // En cuanto termine el video, mostramos el carnet
        video.addEventListener("ended", function () {
            eliminarIntroYMostrarCarnet();
        });

        // Si hacen click en la intro, avanza directo al carnet sin esperar
        introContainer.addEventListener("click", function() {
            eliminarIntroYMostrarCarnet();
        });
    } else {
        if (carnetContainer) carnetContainer.classList.remove("oculto");
    }

    function eliminarIntroYMostrarCarnet() {
        if (introContainer) {
            introContainer.style.opacity = "0";
            setTimeout(() => {
                introContainer.classList.add("oculto"); 
                if (carnetContainer) {
                    carnetContainer.classList.remove("oculto");
                }
            }, 500); 
        }
    }
});

/**
 * Función que quita el Carnet para ver el sitio web principal
 */
function entrarAlSitio() {
    const carnetContainer = document.getElementById("carnet-container");
    if (carnetContainer) {
        carnetContainer.style.opacity = "0";
        setTimeout(() => {
            carnetContainer.classList.add("oculto");
        }, 500);
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
