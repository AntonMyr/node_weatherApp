const request = require('request');

let getWeather = (lat, lng, callback) => {
  request({
    url: `https://api.darksky.net/forecast/95618842dbb84355fd8abaf9b47ff3d8/${lat},${lng}`,
    json: true
  }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      callback(undefined, {
        latitude: lat,
        longtidue: lng,
        currentTemperature: ((body.currently.temperature)-32)*(5/9),
        apparentTemperature: ((body.currently.apparentTemperature)-32)*(5/9),
        weatherSummary: body.currently.summary
      });
    } else {
      callback('Unable to fetch weather.');
    }
  });
};

module.exports = {
  getWeather
};