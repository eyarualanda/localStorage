document.getElementById('buttonText').addEventListener('click', function() {
    // Obtiene el valor del input
    const inputText = document.getElementById('inputText').value;
    
    // Guarda el valor en el localStorage con la clave "datoIngresado"
    localStorage.setItem('datoIngresado', inputText);
});
