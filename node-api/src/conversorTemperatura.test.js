const converteTemperatura = require("./conversorTemperatura");

test('Deve converter Celsius para Fahrenheit', () => {

    expect(converteTemperatura(25)).toBe("77 °F");

});