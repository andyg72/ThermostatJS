console.log("hello world");

var thermostat = new Thermostat();

var updateTemperature = function() {
  $('.temperature-display').css('color', 'red');
  $('.temperature').text(thermostat.temperature);
};

$(document).ready(function() {
  $('.temperature').text(thermostat.temperature);

  $('.change-temp-up').on('click', function() {
    thermostat.increaseTemperature();
    updateTemperature();
  });

  $('.change-temp-down').on('click', function() {
    thermostat.decreaseTemperature();
    updateTemperature();
  });

  $('.reset').on('click', function() {
    thermostat.pressResetButton();
    updateTemperature();
  });

  $('.power-saving-mode').on('click', function() {
    thermostat.powerSavingModeSwitch();
    updateTemperature();
  });



});