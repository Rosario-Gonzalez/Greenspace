document.addEventListener("DOMContentLoaded", function() {
// Configuración del Intersection Observer para cargar las imágenes
const imagenesLazy = document.querySelectorAll('.imagen-lazy');

const cargarImagenes = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const imagen = entry.target;
            imagen.src = imagen.dataset.src;  // Cargamos la imagen
            imagen.onload = () => {
                imagen.classList.add('loaded');  // Añadir la clase para transición
            };
            observer.unobserve(imagen);  // Dejamos de observar la imagen una vez cargada
        }
    });
};

// Crear el Intersection Observer para las imágenes
const observerImagenes = new IntersectionObserver(cargarImagenes, { threshold: 0.1 });

// Comenzamos a observar las imágenes
imagenesLazy.forEach(imagen => {
    observerImagenes.observe(imagen);
});



    // Manejo del formulario
    const form = document.getElementById("contact-form");
    const formMessage = document.createElement('div'); // Crear un contenedor para el mensaje
    formMessage.id = "form-message"; // Asignar ID
    form.appendChild(formMessage); // Añadir el contenedor al formulario

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const formData = new FormData(this);
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "send-email.php", true);

        xhr.onload = function() {
            if (xhr.status === 200) {
                formMessage.textContent = "¡Gracias por tu mensaje! Te responderemos pronto.";
                formMessage.className = "form-message success";
                form.reset();
            } else {
                formMessage.textContent = "Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.";
                formMessage.className = "form-message error";
            }
        };

        xhr.onerror = function() {
            formMessage.textContent = "Hubo un problema con la solicitud. Por favor, inténtalo de nuevo más tarde.";
            formMessage.className = "form-message error";
        };

        xhr.send(formData);
    });

    // Manejo de clics en botones que no sean de la barra de navegación en la página de inicio
    const buttons = document.querySelectorAll('.home .btn'); 
    buttons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault(); 
            alert("Error: Esta función no está disponible."); 
        });
    });
});    
