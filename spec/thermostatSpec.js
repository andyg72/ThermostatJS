describe("", function(){

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  describe("", function(){

    it("starts at 20 degrees", function(){
      expect(thermostat.temperature).toEqual(20);

    });
  });

  describe("changing temperature", function(){

    it("can increase", function() {
      thermostat.increaseTemperature(thermostat.temperatureIncrement);
      expect(thermostat.temperature).toEqual(21);
    });

    it("can decrease", function(){
      thermostat.decreaseTemperature(thermostat.temperatureIncrement);
      expect(thermostat.temperature).toEqual(19);
    });
  });

});
