// JavaScript to handle form submission and geolocation
document.addEventListener('DOMContentLoaded', function() {
    // Form submission
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Form submitted!');
    });

    // Geolocation
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        alert("Geolocation is not supported by this browser.");
    }

    function showPosition(position) {
        alert("Latitude: " + position.coords.latitude + 
        "\nLongitude: " + position.coords.longitude);
    }
});
