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
      thermostat.increaseTemperature();
      expect(thermostat.temperature).toEqual(21);
    });

    it("can decrease", function(){
      thermostat.decreaseTemperature();
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

    it("when switched off maximum should be 32 and power saving mode status should be false", function(){
      thermostat.powerSavingModeSwitch();
      expect(thermostat.temperatureMaximum).toEqual(32);
      expect(thermostat.powerSavingMode).toEqual(false);
    });

    it("when swithced on maximum temperature should be 25 and power saving mode status should be true", function(){
      thermostat.powerSavingModeSwitch();
      thermostat.powerSavingModeSwitch();
      expect(thermostat.temperatureMaximum).toEqual(25);
      expect(thermostat.powerSavingMode).toEqual(true);
    });

    it("when on should limit the maximum temperature to 25 degrees", function() {
      thermostat.increaseTemperature(6);
      expect(thermostat.temperature).toEqual(25);
    });

    it("when off should limit the maximum temperature to 32 degrees", function() {
      thermostat.powerSavingModeSwitch();// depende
      thermostat.increaseTemperature(13);
      expect(thermostat.temperature).toEqual(32);
    });


    it("when switched on it will reduce temperature to the max temperature if above max temperature", function() {
      thermostat.powerSavingModeSwitch();
      thermostat.increaseTemperature(6);
      thermostat.powerSavingModeSwitch();
      expect(thermostat.temperature).toEqual(25)
    });

  });

  describe("reset button", function() {

    it("when pressed resets the thermostat temperature to 20", function() {
      thermostat.increaseTemperature(4);
      thermostat.pressResetButton();
      expect(thermostat.temperature).toEqual(20);
    });

  });

  describe("color display", function() {

    it("when temperature is 17 or less then color should be green", function() {
      thermostat.temperature = 17;
      expect(thermostat.colorCheck()).toEqual("low energy usage");
    });

    it("when temperature is between 18 and 24 color should be yellow", function() {
      thermostat.temperature = 23;
      expect(thermostat.colorCheck()).toEqual("medium energy usage");
    });

    it("when temperature is 25 or over then color should be red", function() {
      thermostat.temperature = 28;
      expect(thermostat.colorCheck()).toEqual("high energy usage");
    });

  });

});
