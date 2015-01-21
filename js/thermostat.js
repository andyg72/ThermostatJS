var Thermostat = function() {

  this.temperature = 20;
  this.temperatureIncrement = 1;
  this.temperatureMinimum = 10;
  this.temperatureMaximum = 25;
  this.powerSavingMode = true;

};

Thermostat.prototype.increaseTemperature = function(changeTempBy) {
  if (this.temperature + changeTempBy > this.temperatureMaximum) {
    this.temperature = this.temperatureMaximum;
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

// Thermostat.prototype.changeTemperature = function(direction, ChangeTempBy) {
//   if (direction = 'increase') {
//     sign = +;
//     comparator = >;
//     limit = this.temperatureMaximum;
//   }
//   else {
//     sign = -;
//     comparator = <;
//     limit = this.temperatureMimimum;    
//   }
//   if (this.temperature sign changeTempBy comparator limit) {
//     this.temperature = limit;
//   }
//   else {
//     this.temperature sign= changeTempBy;
//   }
// };


Thermostat.prototype.powerSavingModeSwitch = function() {
  if (this.powerSavingMode) {
    this.temperatureMaximum = 32;
    this.powerSavingMode = false;
  }
  else {
    this.temperatureMaximum = 25;
    this.powerSavingMode = true;
  }
};

Thermostat.prototype.pressResetButton = function() {
  this.temperature = 20;
};
