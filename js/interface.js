console.log("hello world");

var thermostat = new Thermostat();

var temperatureColor = 'orange';
var powerSavingModeColor = 'green';

var evaluateTemperatureColor = function() {
  switch(thermostat.colorCheck()) {
    case 'low energy usage':
      temperatureColor = 'green';
      break;
    case 'high energy usage':
      temperatureColor =  'red';
      break;
    default:
      temperatureColor = 'orange';
  }
};

var evaluatePowerSavingModeColor = function() {
  if (thermostat.powerSavingMode) {
    powerSavingModeColor = 'green';
  }
  else {
    powerSavingModeColor = 'red';
  }
};

var updateTemperature = function() {
  evaluateTemperatureColor();
  $('.temperature-display').css('color', temperatureColor);
  $('#temperature').text(thermostat.temperature);
};

$(document).ready(function() {
  $('#temperature').text(thermostat.temperature);
  $('.power-saving-mode').css('border-color', powerSavingModeColor);

  $('.change-temp-up').on('click', function(event) {
    event.preventDefault();
    thermostat.increaseTemperature();
    updateTemperature();
  });

  $('.change-temp-down').on('click', function(event) {
    event.preventDefault();
    thermostat.decreaseTemperature();
    updateTemperature();
  });

  $('.reset').on('click', function(event) {
    event.preventDefault();
    thermostat.pressResetButton();
    updateTemperature();
  });

  $('.power-saving-mode').on('click', function(event) {
    event.preventDefault();
    thermostat.powerSavingModeSwitch();
    evaluatePowerSavingModeColor();
    $('.power-saving-mode').css('border-color', powerSavingModeColor);
    updateTemperature();
  });



});