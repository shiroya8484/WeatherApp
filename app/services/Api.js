import apisauce from 'apisauce';

const mapApiKey = '1c8565277b67810d57a0364e529e0ca6';

const api = apisauce.create({
  baseURL: 'http://api.openweathermap.org/data/2.5'
});

export const weatherList = (credentials) => api
  .get(`/find?lat=${credentials.lat}&lon=${credentials.long}&cnt=50&appid=${mapApiKey}`);

export const weatherCurrentLoc = (credentials) => api
  .get(`/weather?lat=${credentials.lat}&lon=${credentials.long}&appid=${mapApiKey}`);



