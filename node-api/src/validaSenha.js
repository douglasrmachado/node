function validaSenha (senha) {

    if(senha.length < 5) {
        return 'TÁ FALTANDO UMAS COISA AÍ PAIZÃO!!!';
    }

    if((!/[a-zA-Z]/.test(senha) || !/\d/.test(senha))) {
        return 'TÁ FALTANDO UMAS COISA AÍ PAIZÃO!!!';
    }

    return senha;
}

module.exports = validaSenha;