console.log("hello world");

var thermostat = new Thermostat();

var color = 'orange';

var evaluateColor = function() {
  switch(thermostat.colorCheck()) {
    case 'low energy usage':
      color = 'green';
      break;
    case 'high energy usage':
      color =  'red';
      break;
    default:
      color = 'orange';
  }
};

var updateTemperature = function() {
  evaluateColor();
  console.log(color);
  $('.temperature-display').css('color', color);
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