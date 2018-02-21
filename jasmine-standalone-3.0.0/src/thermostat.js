const minTemp = 10;

var Thermostat = function() {
  this.temperature = 20;
};

Thermostat.prototype.up = function() {
  this.temperature += 1;
};

Thermostat.prototype.down = function() {
  if (this.temperature <= minTemp) {
    throw 'You have reached the minimum temperature.'
  } else {
    this.temperature -= 1;
  }
};
