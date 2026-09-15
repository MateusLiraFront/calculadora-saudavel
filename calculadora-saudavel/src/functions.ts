import { Perfil } from "./profile";

export function registrarPeso(perfil: Perfil, novoPeso: number): Perfil {
    perfil.peso = novoPeso;
    perfil.imc = Number((perfil.peso / (perfil.altura * perfil.altura)).toFixed(2));
    return perfil;
}

export function registrarAltura(perfil: Perfil, altura: number): Perfil {
    perfil.altura = altura;
    perfil.imc = Number((perfil.peso / (perfil.altura * perfil.altura)).toFixed(2));
    return perfil;
}

export function registrarConsumoAgua(perfil: Perfil, agua: number): Perfil {
    perfil.consumoAgua = agua;
    return perfil;
}

export function registrarCarboidrato(perfil: Perfil, carb: number): Perfil {
    perfil.ConsumoCarboidrato = carb;
    return perfil;
}

export function registrarProteina(perfil: Perfil, proteina: number): Perfil {
    perfil.ConsumoProteina = proteina;
    return perfil;
}

export function registrarTreino(perfil: Perfil, treino: boolean): Perfil {
    perfil.treino = treino;
    return perfil;
}

export function registrarDistancia(perfil: Perfil, distancia: number): Perfil {
    perfil.distanciaPercorrida = distancia;
    return perfil;
}