const convertToCelsius = function(degree) {
  celsius = Math.round((((degree - 32) * (5/9)))*10)/10
  return celsius
};

const convertToFahrenheit = function(degree) {
  fahrenheit = Math.round((((degree * (9/5)) + 32))*10)/10
  return fahrenheit
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
