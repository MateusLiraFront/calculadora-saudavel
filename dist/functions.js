"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registrarPeso = registrarPeso;
exports.registrarAltura = registrarAltura;
exports.registrarConsumoAgua = registrarConsumoAgua;
exports.registrarCarboidrato = registrarCarboidrato;
exports.registrarProteina = registrarProteina;
exports.registrarTreino = registrarTreino;
exports.registrarDistancia = registrarDistancia;
function registrarPeso(perfil, novoPeso) {
    perfil.peso = novoPeso;
    perfil.imc = Number((perfil.peso / (perfil.altura * perfil.altura)).toFixed(2));
    return perfil;
}
function registrarAltura(perfil, altura) {
    perfil.altura = altura;
    perfil.imc = Number((perfil.peso / (perfil.altura * perfil.altura)).toFixed(2));
    return perfil;
}
function registrarConsumoAgua(perfil, agua) {
    perfil.consumoAgua = agua;
    return perfil;
}
function registrarCarboidrato(perfil, carb) {
    perfil.ConsumoCarboidrato = carb;
    return perfil;
}
function registrarProteina(perfil, proteina) {
    perfil.ConsumoProteina = proteina;
    return perfil;
}
function registrarTreino(perfil, treino) {
    perfil.treino = treino;
    return perfil;
}
function registrarDistancia(perfil, distancia) {
    perfil.distanciaPercorrida = distancia;
    return perfil;
}
//# sourceMappingURL=functions.js.map