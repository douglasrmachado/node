function calculaAreaRetangulo(largura, altura) {
    if (largura <= 0 || altura <= 0) {
        throw new Error('TÁ TUDO MENOR QUE ZERO IRMAO, ARRUMA AE.');
    }
    return largura * altura;
}

module.exports = calculaAreaRetangulo;