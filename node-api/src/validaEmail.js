function validaEmail(email){

    const formatEmail = /^\w+@\w+\.[a-zA-Z]{2,}$/;

    if (!formatEmail.test(email)){
        return 'TÁ FALTANDO COISA NESSE EMAIL!';
    }
    
    return email
}

module.exports = validaEmail