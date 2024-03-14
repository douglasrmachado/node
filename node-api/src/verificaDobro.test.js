const dobro = require('./verificaDobro');

test('Retorna o dobro de um número', () => {
    expect(dobro(3)).toBe(6);
    
});
