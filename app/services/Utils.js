export const convertKelvinToCelsius = (kelvin) => {
  return `${(kelvin - 272.15).toFixed(2)}°c`;
};

export const getImageFromUrl = (icon) => {
  return `http://openweathermap.org/img/wn/${icon}@2x.png`;
};

