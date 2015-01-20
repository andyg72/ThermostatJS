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

});
