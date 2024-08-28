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


// Define la función initMap
function initMap() {
    // Coordenadas de ejemplo
    var myLatLng = { lat: -34.397, lng: 150.644 };
    
    // Crea un mapa centrado en las coordenadas especificadas
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: myLatLng
    });

    // Crea un marcador en las coordenadas especificadas
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: "Hello World!"
    });
}

// Llama a la función initMap después de que se cargue la API de Google Maps
google.maps.event.addDomListener(window, "load", initMap);






