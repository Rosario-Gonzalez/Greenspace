document.addEventListener("DOMContentLoaded", function () {
    const spinner = document.getElementById("spinner"); // Spinner
    const content = document.getElementById("content"); // Contenido principal

    // Mostrar el spinner y cargar datos
    spinner.style.display = "flex"; // Asegúrate de que el spinner sea visible
    fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then((response) => response.json())
        .then((data) => {
            // Ocultar el spinner y mostrar el contenido
            spinner.style.display = "none";
            content.style.display = "block";
            content.innerHTML = `<h1>${data.title}</h1><p>${data.body}</p>`;
        })
        .catch((error) => {
            console.error("Error al cargar los datos:", error);
            spinner.style.display = "none";
            content.style.display = "block";
            content.innerHTML = `<p>Hubo un problema al cargar el contenido.</p>`;
        });

    // Manejo del formulario
    const form = document.getElementById("contact-form");
    const formMessage = document.createElement("div");
    formMessage.id = "form-message";
    form.appendChild(formMessage);

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const formData = new FormData(this);
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "send-email.php", true);

        xhr.onload = function () {
            if (xhr.status === 200) {
                formMessage.textContent = "¡Gracias por tu mensaje! Te responderemos pronto.";
                formMessage.className = "form-message success";
                form.reset();
            } else {
                formMessage.textContent =
                    "Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.";
                formMessage.className = "form-message error";
            }
        };

        xhr.onerror = function () {
            formMessage.textContent =
                "Hubo un problema con la solicitud. Por favor, inténtalo de nuevo más tarde.";
            formMessage.className = "form-message error";
        };

        xhr.send(formData);
    });

    // Manejo de botones no funcionales
    const buttons = document.querySelectorAll(".home .btn");
    buttons.forEach((button) => {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            alert("Error: Esta función no está disponible.");
        });
    });
});
