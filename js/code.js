window.addEventListener('load', function () {
    let horaHtml = document.getElementById('hora');
    let minutoHtml = document.getElementById('minuto');
    let segundoHtml = document.getElementById('segundo');
    const mostrarHoraActual = () => {
        let fecha = new Date();
        let hora = fecha.getHours();
        let minuto = fecha.getMinutes();
        let segundo = fecha.getSeconds();

        horaHtml.innerHTML = String(hora).padStart(2, '0');
        minutoHtml.innerHTML = String(minuto).padStart(2, '0');
        segundoHtml.innerHTML = String(segundo).padStart(2, '0');
        setTimeout(mostrarHoraActual, 1000);
    }
    mostrarHoraActual();
})