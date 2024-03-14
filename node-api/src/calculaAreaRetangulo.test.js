const calculaAreaRetangulo = require('./calculaAreaRetangulo');

test('Calcula area de retangulo', () => {

    expect(calculaAreaRetangulo(5, 10)).toBe(50);

});

test('ERRO SE LARGURA OU ALTURA ERRADA', () => {

    expect(() => calculaAreaRetangulo(0, 10)).toThrow('TÁ TUDO MENOR QUE ZERO IRMAO, ARRUMA AE.');

});