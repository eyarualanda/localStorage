document.addEventListener('DOMContentLoaded', function() {
    // Obtiene el valor almacenado en el localStorage
    const storedData = localStorage.getItem('datoIngresado');
    
    // Verifica si hay algún valor en el localStorage
    if (storedData) {
        // Muestra el valor en el span con id="data"
        document.getElementById('data').textContent = storedData;
    } else {
        // Si no hay nada en el localStorage, muestra un mensaje por defecto
        document.getElementById('data').textContent = 'No hay datos guardados';
    }
});
