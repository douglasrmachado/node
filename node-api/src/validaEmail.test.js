const validaEmail = require("./validaEmail");

test('Espera uma estrutura de email correta!', () => {

    const result = validaEmail('email.com')
    expect(result).toBe('TÁ FALTANDO COISA NESSE EMAIL!');
    
});