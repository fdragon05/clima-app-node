const axios = require('axios');


//console.log(encodeUrl);

const getLugarLatLng = async ( dir ) => {

    const encodeUrl = encodeURI( dir );

    const instance = axios.create({
    baseURL: `https://api.openweathermap.org/data/2.5/weather?q=${encodeUrl}&appid=0ee94bbae3c896eea76d1fe261c7bed1`
    //,headers: {'X-Custom-Header': 'foobar'}
  });

  const resp  =  await instance.get();

  if( resp.data === 0 ){
    throw new Error(`No hay resultados para ${dir} `);
  }

  const data        =  resp.data; 
  const direccion   =  data.name;
  const coord       =  data.coord;
  const lng         =  coord.lon;
  const lat         =  coord.lat;

  return {
    direccion,
   // coord,
    lng,
    lat
  }

}

module.exports = {
    getLugarLatLng
}


