document.getElementById('memberForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Simulación de éxito
    alert("¡Gracias por unirte a Addemar! Pronto recibirás noticias nuestras.");
    this.reset();
});

// Suavizado de scroll para enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});