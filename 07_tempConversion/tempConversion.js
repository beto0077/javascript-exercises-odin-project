const convertToCelsius = function(temperature) {
  return Number(((temperature - 32) * (5/9)).toFixed(1));
};

const convertToFahrenheit = function(temperature) {
  return Number(((temperature * 9.0 / 5.0) + 32.0).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
