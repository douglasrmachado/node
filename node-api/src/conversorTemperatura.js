function converteTemperatura(temperatura) {
    
    let resultado = temperatura * 9;
    
    resultado = resultado / 5;
    
    resultado = resultado + 32;

    return resultado + " °F";
}

module.exports = converteTemperatura;