let climaRes;
let climaDescripcion;
let climaTemp;
let SensacionTermica;
let VelocidadViento;

    async function buscarClima(){
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Caracas,Venezuela&appid=3c8a7f5a0dd5eedd3d16fc06726bc9b9&lang=es&units=metric&#39;')
        const climaRes = await response.json();
        const main = climaRes.weather[0].main;
        console.log(main);
    }

    buscarClima();

    async function descripcionClima() {
        const response = await fetch ('https://api.openweathermap.org/data/2.5/weather?q=Caracas,Venezuela&appid=3c8a7f5a0dd5eedd3d16fc06726bc9b9&lang=es&units=metric&#39;')
        const climaDescripcion = await response.json();
        const description = climaDescripcion.weather[0].description;
        console.log(description)
    }

    descripcionClima();

    async function temperaturaClima() {
        const response = await fetch ('https://api.openweathermap.org/data/2.5/weather?q=Caracas,Venezuela&appid=3c8a7f5a0dd5eedd3d16fc06726bc9b9&lang=es&units=metric&#39;')
        const climaTemp = await response.json();
        const temperatura = climaTemp.main.temp;
        console.log(temperatura)
    }

    temperaturaClima();

    async function sensancionTermica() {
        const response = await fetch ('https://api.openweathermap.org/data/2.5/weather?q=Caracas,Venezuela&appid=3c8a7f5a0dd5eedd3d16fc06726bc9b9&lang=es&units=metric&#39;')
        const SensacionTermica = await response.json();
        const sensancion = SensacionTermica.main.feels_like;
        console.log(sensancion)
    }
    sensancionTermica();

    async function VelocidadDelViento(params) {
        const response = await fetch ('https://api.openweathermap.org/data/2.5/weather?q=Caracas,Venezuela&appid=3c8a7f5a0dd5eedd3d16fc06726bc9b9&lang=es&units=metric&#39;')
        const VelocidadViento = await response.json();
        const Velocidad = VelocidadViento.wind.speed;
        console.log(Velocidad);
    }

    VelocidadDelViento();
