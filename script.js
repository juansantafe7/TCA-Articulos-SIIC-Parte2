    // Obtener todas las imágenes con la clase 'myImage'
    var images = document.querySelectorAll(".myImage");
    
    images.forEach(function(img) {
        // Verificar si el atributo src está vacío
        if (img.getAttribute("src") === "") {
            // Si está vacío, establecer el texto alternativo como contenido del elemento img
            img.style.display = "none"; // Oculta la imagen
            img.insertAdjacentHTML("afterend", "<p class='alt-text'>" + img.getAttribute("alt") + "</p>"); // Inserta el texto alternativo
        }
    });

    // Obtener todos los elementos de imagen de los artículos
const imagenes = document.querySelectorAll('.card-image img');

// Iterar sobre cada imagen
for (let i = 0; i < imagenes.length - 1; i++) {
    // Obtener el texto de la fuente del artículo actual y siguiente
    const fuenteActual = document.querySelectorAll('.excerpt > .subtitle')[i].textContent.trim();
    const fuenteSiguiente = document.querySelectorAll('.excerpt > .subtitle')[i + 1].textContent.trim();
    
    // Verificar si el texto de la fuente coincide
    if (fuenteActual === fuenteSiguiente) {
        // Ocultar la imagen del siguiente artículo
        imagenes[i + 1].style.display = 'none';
    }
}


