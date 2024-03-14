const validaSenha = require("./validaSenha");

test('deve retornar senha toda porca', () => {

    const result = validaSenha('kayure');
    expect(result).toBe('TÁ FALTANDO UMAS COISA AÍ PAIZÃO!!!')
    
});
