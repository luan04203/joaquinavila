// Define la fecha objetivo para la cuenta regresiva
const targetDate = new Date('2024-11-15T23:59:59');

// Función para actualizar la cuenta regresiva
function updateCountdown() {
    const now = new Date(); // Obtiene la fecha y hora actual
    const timeDifference = targetDate - now; // Calcula la diferencia de tiempo

    if (timeDifference <= 0) {
        // Si la fecha objetivo ha pasado, muestra un mensaje de finalización
        document.getElementById('countdown').innerHTML = '¡La cuenta regresiva ha terminado!';
        clearInterval(countdownInterval); // Detiene la actualización periódica
        return;
    }

    // Calcula días, horas, minutos y segundos restantes
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Muestra el tiempo restante en el elemento con id "countdown"
    document.getElementById('countdown').innerHTML = 
        `${days} días ${hours} horas ${minutes} minutos ${seconds} segundos`;
}

// Actualiza la cuenta regresiva cada segundo
const countdownInterval = setInterval(updateCountdown, 1000);

// Actualiza la cuenta regresiva inmediatamente al cargar la página
updateCountdown();
