var Thermostat = function() {

  this.temperatureDefault = 20;
  this.temperaturePowerSavingModeMaximum = 32;
  this.temperaturePowerSavingModeMinimum = 25;
  this.defaultColorDisplayLowEnergyUsage = 18
  this.defaultColorDisplayMediumEnergUsage = 25


  this.temperature = this.temperatureDefault;
  this.temperatureIncrement = 1;
  this.temperatureMinimum = 10;
  this.temperatureMaximum = 25;
  this.powerSavingMode = true;

};

Thermostat.prototype.increaseTemperature = function(changeTempBy) {
  changeTempBy = changeTempBy || this.temperatureIncrement
  if (this.temperature + changeTempBy > this.temperatureMaximum) {
    this.temperature = this.temperatureMaximum;
  }
  else {
    this.temperature += changeTempBy;
  }
};

Thermostat.prototype.decreaseTemperature = function(changeTempBy) {
  changeTempBy = changeTempBy || this.temperatureIncrement
  if (this.temperature - changeTempBy < this.temperatureMinimum) {
    this.temperature = this.temperatureMinimum;
  }
  else {
    this.temperature -= changeTempBy;
  }
};

Thermostat.prototype.powerSavingModeSwitch = function() {
  if (this.powerSavingMode) {
    this._changeValuesPowerSavingModeOff();
  }
  else {
    this._changeValuesPowerSavingModeOn();
  }
};

Thermostat.prototype.pressResetButton = function() {
  this.temperature = this.temperatureDefault;
};

Thermostat.prototype.colorCheck = function() {
  if (this.temperature < this.defaultColorDisplayLowEnergyUsage) {
    return "low energy usage";
  }
  else if (this.temperature < this.defaultColorDisplayMediumEnergUsage) {
    return "medium energy usage";
  }
  else {
    return "high energy usage";
  }
};

Thermostat.prototype._changeValuesPowerSavingModeOff = function() {
  this.temperatureMaximum = this.temperaturePowerSavingModeMaximum;
  this.powerSavingMode = false;
};

Thermostat.prototype._changeValuesPowerSavingModeOn = function() {
    this.temperatureMaximum = this.temperaturePowerSavingModeMinimum;
    this._resetTemperatureWhenPowerSavingModeOn();
    this.powerSavingMode = true;
};

Thermostat.prototype._resetTemperatureWhenPowerSavingModeOn = function() {
  if (this.temperature > this.temperatureMaximum){
    this.temperature = this.temperatureMaximum;
  }
};


