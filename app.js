#!/usr/bin/env node
const yargs = require("yargs");

const geocode = require("./geocode/geocode");
const weather = require("./weather/weather");

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: "address",
      describe: "Address to fetch weather for",
      string: true
    }
  })
  .help()
  .alias("help", "h").argv;

geocode.geocodeAddress(argv.a).then(
  results => {
    console.log(results.address);
    weather.getWeather(results.latitude, results.longitude).then(
      weatherResults => {
        console.log(
          `It's currently ${weatherResults.currentTemperature}. It feels like ${weatherResults.apparentTemperature}. \nWeather summary: ${weatherResults.weatherSummary}`
        );
      },
      errorMessage => {
        console.log(errorMessage);
      }
    );
  },
  errorMessage => {
    console.log(errorMessage);
  }
);
