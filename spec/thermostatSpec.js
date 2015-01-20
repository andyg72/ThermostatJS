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

    it("will not go below 10 degrees", function(){
      thermostat.decreaseTemperature(11);
      expect(thermostat.temperature).toEqual(10);
    });

  });

  describe("power saving mode", function() {

    it("should be on by default", function() {
      expect(thermostat.powerSavingMode).toEqual(true);
    });

    it("when on should limit the maximum temperature to 25 degrees", function() {
      thermostat.increaseTemperature(6);
      expect(thermostat.temperature).toEqual(25);
    });

  });

});
