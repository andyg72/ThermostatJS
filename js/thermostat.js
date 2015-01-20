var Thermostat = function() {

  this.temperature = 20;
  this.temperatureIncrement = 1;
  this.temperatureMinimum = 10;
  this.temperatureMaximumPSM = 25;
  this.powerSavingMode = true;

};

Thermostat.prototype.increaseTemperature = function(changeTempBy) {
  if (this.temperature + changeTempBy > this.temperatureMaximumPSM) {
    this.temperature = this.temperatureMaximumPSM
  }
  else {
    this.temperature += changeTempBy;
  }
};

Thermostat.prototype.decreaseTemperature = function(changeTempBy) {
  if (this.temperature - changeTempBy < this.temperatureMinimum) {
    this.temperature = this.temperatureMinimum;
  }
  else {
    this.temperature -= changeTempBy;
  }
};
