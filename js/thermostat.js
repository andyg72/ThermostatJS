var Thermostat = function() {

  this.temperature = 20;
  this.temperatureIncrement = 1;
  this.temperatureMinimum = 10;

};

Thermostat.prototype.increaseTemperature = function(changeTempBy) {
  return this.temperature += changeTempBy;
};

Thermostat.prototype.decreaseTemperature = function(changeTempBy) {
  if ((20 - changeTempBy) < 10) {
    return 10;
  }
  else {
   return 20 -= changeTempBy; 
  }
};
