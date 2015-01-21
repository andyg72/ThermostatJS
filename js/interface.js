console.log("hello world");

var thermostat = new Thermostat();

$(document).ready(function() {
  $('.temperature').text(thermostat.temperature);
  $('.change-temp-up').on('click', function() {
    thermostat.increaseTemperature();
    $('.temperature').text(thermostat.temperature);
  });


});