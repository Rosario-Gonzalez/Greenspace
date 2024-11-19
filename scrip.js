document.addEventListener("DOMContentLoaded", function() {
    let pagina = 1;  // Para controlar la paginación de datos

// Mostrar pantalla de carga
function mostrarPantallaDeCarga() {
    document.getElementById('loading-screen').style.display = 'block';
}

// Ocultar pantalla de carga
function ocultarPantallaDeCarga() {
    document.getElementById('loading-screen').style.display = 'none';
}

// Función para cargar los artículos
function cargarArticulos() {
    mostrarPantallaDeCarga();

    fetch(`data.json?page=${pagina}`)  // Simulación de paginación con parámetros
        .then(response => response.json())
        .then(datos => {
            const contenedor = document.getElementById('contenedor-articulos');
            datos.forEach(item => {
                const articulo = document.createElement('div');
                articulo.classList.add('articulo');

                const titulo = document.createElement('h2');
                titulo.textContent = item.titulo;
                articulo.appendChild(titulo);

                const contenido = document.createElement('p');
                contenido.textContent = item.contenido;
                articulo.appendChild(contenido);

                contenedor.appendChild(articulo);
            });

            ocultarPantallaDeCarga();
            pagina++;  // Aumentamos el número de la página para cargar más artículos
        })
        .catch(error => {
            console.error('Error al cargar los datos:', error);
            ocultarPantallaDeCarga();
        });
}

// Configuración de Intersection Observer para detectar cuando el usuario llegue al final de la página
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {  // Cuando el marcador de "carga más" entra en vista
            cargarArticulos();
            observer.unobserve(entry.target);  // Dejamos de observar después de cargar
        }
    });
}, { threshold: 1.0 });

// Agregar un marcador al final de la página
const marcadorDeCarga = document.createElement('div');
marcadorDeCarga.classList.add('marcador-carga');
document.body.appendChild(marcadorDeCarga);

// Iniciar la observación
observer.observe(marcadorDeCarga);

// Llamar a la función inicial para cargar los primeros artículos
cargarArticulos();
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
