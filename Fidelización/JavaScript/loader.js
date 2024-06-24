window.addEventListener('load', function() {
    var loaderContainer = document.querySelector('.loader-container');
    var contenido = document.getElementById('contenido');
    loaderContainer.style.display = 'none';
    contenido.style.display = 'block';
});

document.addEventListener('DOMContentLoaded', function() {
    var navToggle = document.querySelector('.nav-toggle');
    var navOptions = document.querySelector('.nav-options');

    navToggle.addEventListener('click', function() {
        // Alternar la clase 'active' en las opciones de navegación
        navOptions.classList.toggle('active');
    });
});
