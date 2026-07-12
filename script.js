document.addEventListener("DOMContentLoaded", function () {
    const videoContainer = document.getElementById("intro-video-container");
    const video = videoContainer.querySelector("video");
    const carnetContainer = document.getElementById("carnet-container");
    const btnEntrar = document.querySelector(".btn-entrar-sitio");
    const pantallaPrincipal = document.getElementById("pantalla-principal");
    const botonesMenu = document.querySelectorAll(".capa-botones-horizontales button");
    const pestañas = document.querySelectorAll(".pestaña-contenido");

    // 1. Manejo del Video de Introducción
    if (video) {
        video.addEventListener("ended", () => {
            videoContainer.classList.add("invisible");
            carnetContainer.classList.remove("invisible");
        });
        // Por si se queda colgado, clic en el video también avanza
        videoContainer.addEventListener("click", () => {
            videoContainer.classList.add("invisible");
            carnetContainer.classList.remove("invisible");
        });
    }

    // 2. Transición del Carnet a la Pantalla Principal
    if (btnEntrar) {
        btnEntrar.addEventListener("click", () => {
            carnetContainer.classList.add("oculto");
            pantallaPrincipal.classList.remove("oculto");
        });
    }

    // 3. Sistema de Navegación por Pestañas del Menú Inferior
    botonesMenu.forEach(boton => {
        boton.addEventListener("click", () => {
            const targetId = boton.getAttribute("data-target");

            if (targetId) {
                // Ocultar todas las pestañas primero
                pestañas.forEach(pestaña => {
                    pestaña.classList.add("oculto");
                });

                // Mostrar la pestaña seleccionada
                const pestañaActiva = document.getElementById(targetId);
                if (pestañaActiva) {
                    pestañaActiva.classList.remove("oculto");
                }
            }
        });
    });
});
