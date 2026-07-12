document.addEventListener("DOMContentLoaded", function () {
    const videoContainer = document.getElementById("intro-video-container");
    const video = videoContainer ? videoContainer.querySelector("video") : null;
    const carnetContainer = document.getElementById("carnet-container");
    const btnEntrar = document.querySelector(".btn-entrar-sitio");
    const pantallaPrincipal = document.getElementById("pantalla-principal");
    const botonesMenu = document.querySelectorAll(".capa-botones-horizontales button");
    const pestañas = document.querySelectorAll(".pestaña-contenido");
    const imagenMenuDinamica = document.getElementById("imagen-menu-dinamica");

    // 1. Manejo del Video de Introducción
    if (video) {
        video.addEventListener("ended", () => {
            videoContainer.classList.add("invisible");
            if (carnetContainer) carnetContainer.classList.remove("invisible");
        });
        videoContainer.addEventListener("click", () => {
            videoContainer.classList.add("invisible");
            if (carnetContainer) carnetContainer.classList.remove("invisible");
        });
    } else {
        if (carnetContainer) carnetContainer.classList.remove("invisible");
    }

    // 2. Transición del Carnet a la Pantalla Principal
    if (btnEntrar) {
        btnEntrar.addEventListener("click", () => {
            if (carnetContainer) carnetContainer.classList.add("oculto");
            if (pantallaPrincipal) pantallaPrincipal.classList.remove("oculto");
        });
    }

    // 3. Sistema de Navegación por Pestañas e Intercambio de Menú
    botonesMenu.forEach(boton => {
        boton.addEventListener("click", () => {
            const targetId = boton.getAttribute("data-target");
            const nuevaImagenMenu = boton.getAttribute("data-menu");

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

                // Cambiar el diseño de la barra inferior según la sección elegida
                if (imagenMenuDinamica && nuevaImagenMenu) {
                    imagenMenuDinamica.src = nuevaImagenMenu;
                }
            }
        });
    });
});
