const result = document.querySelector('.result');
const form = document.querySelector('.get-weather');
const nameCity = document.querySelector('#city');
const nameCountry = document.querySelector('#country');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    clearHTML(); // Limpiar errores anteriores

    if (nameCity.value.trim() === '' || nameCountry.value.trim() === '') {
        showError('Ambos campos son obligatorios...');
        return;
    }

    callAPI(nameCity.value.trim(), nameCountry.value.trim());
});

function callAPI(city, country) {
    const apiId = '85b6a2914d422d1763e40c7e83f3ad0c';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiId}`;
  

    fetch(url)
        .then(data => {
            if (!data.ok) {
                throw new Error('No se pudo obtener el clima. Por favor, intenta de nuevo más tarde.');
            }
            return data.json();
        })
        .then(dataJSON => {
            if (dataJSON.cod === '404') {
                showError('Ciudad no encontrada...');
            } else {
                showWeather(dataJSON);
            }
        })
        .catch(error => {
            showError(error.message);
        });
}

function showWeather(data) {
    const { name, main: { temp, temp_min, temp_max, humidity }, weather: [arr] } = data;

    const degrees = kelvinToCentigrade(temp);
    const min = kelvinToCentigrade(temp_min);
    const max = kelvinToCentigrade(temp_max);
    const hu =  mostrarHumedad(humidity);

    const content = document.createElement('div');
    content.innerHTML = `
        <h5>Clima en ${name}</h5>
        <img src="https://openweathermap.org/img/wn/${arr.icon}@2x.png" alt="icon">
        <h2>${degrees}°C</h2>
        <p>Max: ${max}°C</p>
        <p>Min: ${min}°C</p>
        <p>Humedad: ${hu}</p>
    `;

    result.appendChild(content);
}

function showError(message) {
    const alert = document.createElement('p');
    alert.classList.add('alert-message');
    alert.innerHTML = message;

    form.appendChild(alert);
    setTimeout(() => {
        alert.remove();
    }, 3000);
}

function kelvinToCentigrade(temp) {
    return parseFloat((temp - 273.15).toFixed(2));
}
function mostrarHumedad(humidity) {
      return parseInt((humidity ))
}

function clearHTML() {
    result.innerHTML = '';
}
