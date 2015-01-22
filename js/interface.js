console.log("hello world");

var thermostat = new Thermostat();

var temperatureColor = 'orange';
var powerSavingModeColor = 'green';

var evaluateTemperatureColor = function() {
  switch(thermostat.colorCheck()) {
    case 'low-energy-usage':
      return'green';
      break;
    case 'high-energy-usage':
      return  'red';
      break;
    default:
      return 'orange';
  }
};

var evaluatePowerSavingModeColor = function() {
  if (thermostat.powerSavingMode) {
    return 'green';
  }
  else {
    return 'red';
  }
};

var updateTemperature = function() {
  $('#temperature').css('color', evaluateTemperatureColor());
  $('#temperature').text(thermostat.temperature);
};

  $(document).ready(function() {
  $('#temperature').text(thermostat.temperature);
  $('#temperature').css('color', evaluateTemperatureColor())
  $('h2').css('background-color', evaluatePowerSavingModeColor());

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
    $('h2').css('background-color', evaluatePowerSavingModeColor());
    updateTemperature();
  });

});