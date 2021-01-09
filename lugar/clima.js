const axios = require('axios');

const getClima = async ( lat, lng ) =>{

    const resp = await axios.get(`thhps://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=0ee94bbae3c896eea76d1fe261c7bed1&units=metric`);

    return resp.data.main.temp;

}


module.exports = {
    getClima
}