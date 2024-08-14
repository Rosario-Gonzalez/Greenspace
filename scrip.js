function mostrarMasInformacion() {
    alert('Aquí puedes agregar más información sobre tu trabajo.');
}
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const formData = new FormData(this);
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "send-email.php", true);
        xhr.onload = function() {
            if (xhr.status === 200) {
                alert("¡Gracias por tu mensaje! Te responderemos pronto.");
                form.reset();
            } else {
                alert("Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.");
            }
        };
        xhr.send(formData);
    });
});







