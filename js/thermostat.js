var Thermostat = function() {

  this.temperature = 20;
  this.temperatureIncrement = 1;

};

Thermostat.prototype.increaseTemperature = function(changeTempBy) {
  return this.temperature += changeTempBy;
};

Thermostat.prototype.decreaseTemperature = function(changeTempBy) {
  return this.temperature -= changeTempBy;
};
