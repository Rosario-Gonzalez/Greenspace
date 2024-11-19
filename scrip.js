document.addEventListener("DOMContentLoaded", function() {
    /// Simula una carga diferida
function loadContent() {
    const spinner = document.getElementById('spinner');
    const content = document.getElementById('content');

    // Simula un tiempo de carga (por ejemplo, 3 segundos)
    setTimeout(() => {
        // Oculta el spinner
        spinner.style.display = 'none';
        
        // Muestra el contenido
        content.style.display = 'block';
        content.innerHTML = `
            <h1>¡Contenido Cargado!</h1>
            <p>Este es el contenido que se ha cargado de forma diferida.</p>
        `;
    }, 3000); // 3 segundos de demora
}

// Llama a la función cuando se cargue la página
window.addEventListener('load', loadContent);


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
